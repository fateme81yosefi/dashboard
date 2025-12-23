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
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      iconBg: 'bg-blue-500/10 dark:bg-blue-500/20',
      iconBorder: 'border-blue-500/20 dark:border-blue-500/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: t('totalRevenue'),
      value: formatNumberWithSeparator(12345000, language),
      unit: t('toman'),
      icon: 'lucide:dollar-sign',
      gradient: 'from-emerald-500 via-emerald-600 to-green-600',
      iconBg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
      iconBorder: 'border-emerald-500/20 dark:border-emerald-500/30',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      title: t('todayActivity'),
      value: formatNumberWithSeparator(1234, language),
      icon: 'lucide:activity',
      gradient: 'from-purple-500 via-purple-600 to-purple-700',
      iconBg: 'bg-purple-500/10 dark:bg-purple-500/20',
      iconBorder: 'border-purple-500/20 dark:border-purple-500/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: t('monthlyGrowth'),
      value: formatNumber('23.5%', language),
      icon: 'lucide:trending-up',
      gradient: 'from-orange-500 via-orange-600 to-amber-600',
      iconBg: 'bg-orange-500/10 dark:bg-orange-500/20',
      iconBorder: 'border-orange-500/20 dark:border-orange-500/30',
      iconColor: 'text-orange-600 dark:text-orange-400',
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
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${stat.iconBg} border ${stat.iconBorder} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon 
                      icon={stat.icon} 
                      className={`w-7 h-7 ${stat.iconColor}`} 
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

