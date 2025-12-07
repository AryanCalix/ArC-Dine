import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ArC Dine - by AryanCalix',
  description: 'Welcome to ArC Dine - Delicious food at your fingertips - Created by AryanCalix',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-black text-white`}>
        {children}
      </body>
    </html>
  )
}
