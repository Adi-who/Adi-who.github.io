import { profile } from '../data/portfolio'

export type GithubUser = {
  login: string
  name: string | null
  bio: string | null
  avatar_url: string
  html_url: string
  public_repos: number
  followers: number
  following: number
  created_at: string
  location: string | null
}

export type GithubRepo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
  pushed_at: string
}

export type GithubStats = {
  user: GithubUser
  repos: GithubRepo[]
  totalStars: number
  languages: { name: string; count: number }[]
}

const USER_URL = 'https://api.github.com/users/Adi-who'
const REPOS_URL = 'https://api.github.com/users/Adi-who/repos?per_page=100&sort=updated'

function fallbackUser(): GithubUser {
  return {
    login: profile.handle,
    name: profile.name,
    bio: profile.intro,
    avatar_url: profile.avatarRemote,
    html_url: profile.githubUrl,
    public_repos: 1,
    followers: 0,
    following: 0,
    created_at: '2026-08-31T18:40:27Z',
    location: profile.location,
  }
}

export async function fetchGithubStats(): Promise<GithubStats> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(USER_URL, { headers: { Accept: 'application/vnd.github+json' } }),
      fetch(REPOS_URL, { headers: { Accept: 'application/vnd.github+json' } }),
    ])
    const user: GithubUser = userRes.ok ? await userRes.json() : fallbackUser()
    const raw: GithubRepo[] = reposRes.ok ? await reposRes.json() : []
    const repos = Array.isArray(raw) ? raw.filter((repo) => !repo.fork) : []
    const counts = new Map<string, number>()
    for (const repo of repos) {
      if (!repo.language) continue
      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1)
    }
    return {
      user,
      repos,
      totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
      languages: [...counts.entries()]
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count),
    }
  } catch {
    return { user: fallbackUser(), repos: [], totalStars: 0, languages: [] }
  }
}
