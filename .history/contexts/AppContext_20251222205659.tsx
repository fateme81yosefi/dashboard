'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'fa' | 'en'
type Theme = 'light' | 'dark'

interface AppContextType {
  language: Language
  theme: Theme
  toggleLanguage: () => void
  toggleTheme: () => void
  setLanguage: (lang: Language) => void
  setTheme: (theme: Theme) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fa')
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load from localStorage
    const savedLanguage = localStorage.getItem('language') as Language
    const savedTheme = localStorage.getItem('theme') as Theme
    
    const initialLanguage = savedLanguage || 'fa'
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
    document.documentElement.setAttribute('lang', initialLanguage)
    document.documentElement.setAttribute('dir', initialLanguage === 'fa' ? 'rtl' : 'ltr')
    
    if (savedTheme) {
      setThemeState(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        setThemeState('dark')
        document.documentElement.classList.add('dark')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language)
      document.documentElement.setAttribute('lang', language)
      document.documentElement.setAttribute('dir', language === 'fa' ? 'rtl' : 'ltr')
    }
  }, [language, mounted])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [theme, mounted])

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'fa' ? 'en' : 'fa'))
  }

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const setTheme = (theme: Theme) => {
    setThemeState(theme)
  }

  return (
    <AppContext.Provider
      value={{
        language,
        theme,
        toggleLanguage,
        toggleTheme,
        setLanguage,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

