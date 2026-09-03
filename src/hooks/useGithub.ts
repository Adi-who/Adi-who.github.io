import { useEffect, useState } from 'react'
import { fetchGithubStats, type GithubStats } from '../lib/github'

export function useGithub() {
  const [stats, setStats] = useState<GithubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    fetchGithubStats().then((data) => {
      if (cancelled) return
      setStats(data)
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [])

  return { stats, loading }
}
