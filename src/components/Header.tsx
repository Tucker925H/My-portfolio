'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-base font-medium tracking-wide text-gray-900 hover:text-gray-600 transition-colors">
          HONDA Takayuki
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${pathname === href ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-gray-100 bg-white">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-sm ${pathname === href ? 'text-gray-900 font-medium' : 'text-gray-500'}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
