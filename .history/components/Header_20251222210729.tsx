'use client'

import { Menu, Bell, Search, User, Moon, Sun, Languages } from 'lucide-react'
import { useApp } from '@/contexts/AppContext'
import { useTranslation } from '@/hooks/useTranslation'

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { theme, toggleTheme, toggleLanguage, language } = useApp()
  const { t } = useTranslation()

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4 space-x-reverse">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="relative hidden md:block">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t('search')}
              className="w-64 pr-10 pl-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3 space-x-reverse">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 relative group"
            title={language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
          >
            <Languages className="w-5 h-5" />
            <span className="absolute -top-1 -left-1 bg-primary-600 text-white text-xs px-1.5 py-0.5 rounded text-[10px] font-medium">
              {language === 'fa' ? 'FA' : 'EN'}
            </span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-all duration-200"
            title={theme === 'dark' ? t('light') : t('dark')}
            aria-label={theme === 'dark' ? t('light') : t('dark')}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 transition-transform duration-200 hover:rotate-12" />
            ) : (
              <Moon className="w-5 h-5 transition-transform duration-200 hover:rotate-12" />
            )}
          </button>
        
          <div className="flex items-center space-x-3 space-x-reverse cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {t('systemAdmin')}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                admin@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

