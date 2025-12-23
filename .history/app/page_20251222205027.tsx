'use client'

import DashboardLayout from '@/components/DashboardLayout'
import StatsCards from '@/components/StatsCards'
import ChartsSection from '@/components/ChartsSection'
import RecentActivity from '@/components/RecentActivity'
import QuickActions from '@/components/QuickActions'
import { useTranslation } from '@/hooks/useTranslation'

export default function Home() {
  const { t } = useTranslation()
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('adminDashboard')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {t('welcomeMessage')}
            </p>
          </div>
        </div>

        <StatsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartsSection />
          <RecentActivity />
        </div>

        <QuickActions />
      </div>
    </DashboardLayout>
  )
}

