import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oni anime',
  description: 'Welcome to Oni Anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>this is work</div>
        {children}</body>
    </html>
  )
}
