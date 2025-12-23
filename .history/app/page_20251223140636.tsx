'use client'

import DashboardLayout from '@/components/DashboardLayout'
import StatsCards from '@/components/StatsCards'
import ChartsSection from '@/components/ChartsSection'
import RecentActivity from '@/components/RecentActivity'

export default function Home() {
  
  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Stats Cards */}
        <StatsCards />
        
        {/* Charts and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartsSection />
          <RecentActivity />
        </div>


      </div>
    </DashboardLayout>
  )
}

