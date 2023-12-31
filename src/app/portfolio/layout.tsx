import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Particles from '@/components/Particles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
    </html>
  )
}
