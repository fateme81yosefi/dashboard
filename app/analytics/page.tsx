'use client'

import DashboardLayout from '@/components/DashboardLayout'
import ChartsSection from '@/components/ChartsSection'
import { useTranslation } from '@/hooks/useTranslation'

export default function AnalyticsPage() {
  const { t } = useTranslation()
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t('analyticsAndStats')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {t('analyticsDescription')}
          </p>
        </div>

        <ChartsSection />
      </div>
    </DashboardLayout>
  )
}

