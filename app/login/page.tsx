'use client'

import Link from 'next/link'
import Icon from '@/components/Icon'
import LoginForm from '@/components/auth/LoginForm'
import { useTranslation } from '@/hooks/useTranslation'
import { useApp } from '@/contexts/AppContext'

export default function LoginPage() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useApp()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 flex items-center justify-center p-4">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 left-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
        aria-label={theme === 'dark' ? t('light') : t('dark')}
      >
        {theme === 'dark' ? (
          <Icon icon="lucide:sun" className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        ) : (
          <Icon icon="lucide:moon" className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {t('loginTitle')}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('loginDescription')}
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <LoginForm />

          {/* Register Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('dontHaveAccount')}{' '}
              <Link
                href="/register"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t('register')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

