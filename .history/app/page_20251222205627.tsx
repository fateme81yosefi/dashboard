'use client'

import DashboardLayout from '@/components/DashboardLayout'
import StatsCards from '@/components/StatsCards'
import ChartsSection from '@/components/ChartsSection'
import RecentActivity from '@/components/RecentActivity'
import QuickActions from '@/components/QuickActions'
import { useTranslation } from '@/hooks/useTranslation'

export default function Home() {
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
     

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

