import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function Container({ children, className = '', id }: ContainerProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-5 py-20 sm:px-8 md:py-28 lg:px-10 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
