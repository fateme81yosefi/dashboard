'use client'

import DashboardLayout from '@/components/DashboardLayout'
import ReportsSection from '@/components/ReportsSection'
import { useTranslation } from '@/hooks/useTranslation'

export default function ReportsPage() {
  const { t } = useTranslation()
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('reportsAndAnalytics')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {t('reportsDescription')}
            </p>
          </div>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 space-x-reverse">
            <span>{t('createNewReport')}</span>
          </button>
        </div>

        <ReportsSection />
      </div>
    </DashboardLayout>
  )
}

