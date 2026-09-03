import { useEffect, useState } from 'react'

export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    setEnabled(true)
    document.body.classList.add('has-cursor')

    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY })
      const target = event.target as HTMLElement | null
      setHover(Boolean(target?.closest('a, button')))
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      document.body.classList.remove('has-cursor')
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      className={`cursor-dot ${hover ? 'is-hover' : ''}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)` }}
      aria-hidden
    />
  )
}
