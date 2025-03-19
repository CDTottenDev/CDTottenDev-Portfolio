import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | CDTotten Dev',
  description: 'Our projects and offerings',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}
