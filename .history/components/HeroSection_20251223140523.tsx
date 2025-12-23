'use client'

import { useTranslation } from '@/hooks/useTranslation'

export default function HeroSection() {
  const { t } = useTranslation()
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
        {t('dashboard')}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {t('dashboardDescription') || 'مدیریت و نظارت کامل بر سیستم خود را در یک مکان داشته باشید'}
      </p>
    </div>
  )
}
