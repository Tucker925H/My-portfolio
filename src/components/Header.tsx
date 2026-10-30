'use client'

import { useState } from 'react'
import { useLang } from '@/contexts/LanguageContext'
import { t } from '@/locales/translations'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggle } = useLang()
  const nav = t[lang].nav

  const navLinks = [
    { href: '#about', label: nav.about },
    { href: '#projects', label: nav.projects },
    { href: '#press', label: nav.press },
    { href: '#articles', label: nav.articles },
  ]

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-base font-medium tracking-wide text-gray-900 hover:text-gray-600 transition-colors">
          HONDA Takayuki
        </a>

        {/* Desktop nav + lang toggle */}
        <div className="hidden sm:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                {label}
              </a>
            ))}
          </nav>
          <button
            onClick={toggle}
            className="text-xs text-gray-400 hover:text-gray-700 border border-gray-200 hover:border-gray-400 px-2.5 py-1 rounded transition-colors"
          >
            {lang === 'ja' ? 'EN' : 'JA'}
          </button>
        </div>

        {/* Mobile right side */}
        <div className="sm:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs text-gray-400 hover:text-gray-700 border border-gray-200 px-2 py-0.5 rounded"
          >
            {lang === 'ja' ? 'EN' : 'JA'}
          </button>
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-gray-100 bg-white">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-sm text-gray-500 hover:text-gray-900"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
