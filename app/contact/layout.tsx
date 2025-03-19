import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | CDTotten Dev',
  description: 'Contact page description',
}

export default function ContactLayout({
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
