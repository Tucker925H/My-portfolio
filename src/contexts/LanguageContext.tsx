'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Lang = 'ja' | 'en'

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'ja',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ja')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang') as Lang | null
      if (saved === 'ja' || saved === 'en') setLang(saved)
    } catch {}
  }, [])

  const toggle = () => {
    setLang(prev => {
      const next = prev === 'ja' ? 'en' : 'ja'
      try { localStorage.setItem('lang', next) } catch {}
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
