'use client'

import Icon from './Icon'
import { useTranslation } from '@/hooks/useTranslation'
import { formatNumber, formatNumberWithSeparator } from '@/lib/utils'

export default function StatsCards() {
  const { t, language } = useTranslation()
  
  const stats = [
    {
      title: t('totalUsers'),
      value: formatNumberWithSeparator(12345, language),
      icon: 'lucide:users',
      color: 'blue',
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      lightColor: 'blue-500',
    },
    {
      title: t('totalRevenue'),
      value: formatNumberWithSeparator(12345000, language),
      unit: t('toman'),
      icon: 'lucide:dollar-sign',
      color: 'emerald',
      gradient: 'from-emerald-500 via-emerald-600 to-green-600',
      lightColor: 'emerald-500',
    },
    {
      title: t('todayActivity'),
      value: formatNumberWithSeparator(1234, language),
      icon: 'lucide:activity',
      color: 'purple',
      gradient: 'from-purple-500 via-purple-600 to-purple-700',
      lightColor: 'purple-500',
    },
    {
      title: t('monthlyGrowth'),
      value: formatNumber('23.5%', language),
      icon: 'lucide:trending-up',
      color: 'orange',
      gradient: 'from-orange-500 via-orange-600 to-amber-600',
      lightColor: 'orange-500',
    },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat, index) => {
        return (
          <div
            key={index}
            className="group relative"
          >
            {/* Card */}
            <div className="relative h-full bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Right accent border */}
              <div className={`absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b ${stat.gradient}`} />
              
              {/* Content */}
              <div className="p-6">
                {/* Icon and title row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-${stat.lightColor}/10 dark:bg-${stat.lightColor}/20 border border-${stat.lightColor}/20 dark:border-${stat.lightColor}/30 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon 
                      icon={stat.icon} 
                      className={`w-7 h-7 text-${stat.color}-600 dark:text-${stat.color}-400`} 
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide truncate">
                      {stat.title}
                    </p>
                  </div>
                </div>
                
                {/* Value */}
                <div className="flex items-baseline gap-2 space-x-reverse">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </h3>
                  {stat.unit && (
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {stat.unit}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

