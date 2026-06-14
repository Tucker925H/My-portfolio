import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HONDA Takayuki | Portfolio',
  description: '旅好きなエンジニアの旅路',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-800`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
