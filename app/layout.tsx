import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Making of Konarak Sun Temple',
  description: 'An immersive journey through the construction of the magnificent Konarak Sun Temple',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
