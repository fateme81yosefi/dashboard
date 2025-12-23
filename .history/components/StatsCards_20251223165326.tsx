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
      gradient: 'from-blue-500 to-blue-600',
      lightBg: 'bg-blue-500/5 dark:bg-blue-500/10',
      iconBg: 'bg-blue-500/10 dark:bg-blue-500/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      borderColor: 'border-blue-200 dark:border-blue-800',
    },
    {
      title: t('totalRevenue'),
      value: formatNumberWithSeparator(12345000, language),
      unit: t('toman'),
      icon: 'lucide:dollar-sign',
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      lightBg: 'bg-emerald-500/5 dark:bg-emerald-500/10',
      iconBg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
    },
    {
      title: t('todayActivity'),
      value: formatNumberWithSeparator(1234, language),
      icon: 'lucide:activity',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      lightBg: 'bg-purple-500/5 dark:bg-purple-500/10',
      iconBg: 'bg-purple-500/10 dark:bg-purple-500/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
      borderColor: 'border-purple-200 dark:border-purple-800',
    },
    {
      title: t('monthlyGrowth'),
      value: formatNumber('23.5%', language),
      icon: 'lucide:trending-up',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      lightBg: 'bg-orange-500/5 dark:bg-orange-500/10',
      iconBg: 'bg-orange-500/10 dark:bg-orange-500/20',
      iconColor: 'text-orange-600 dark:text-orange-400',
      borderColor: 'border-orange-200 dark:border-orange-800',
    },
  ]
  
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        return (
          <div
            key={index}
            className="group relative"
          >
            {/* Card */}
            <div className={`relative h-full ${stat.lightBg} rounded-xl border-2 ${stat.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
              {/* Top accent line */}
              <div className={`h-1 bg-gradient-to-r ${stat.gradient}`} />
              
              {/* Content */}
              <div className="p-5">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon icon={stat.icon} className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                </div>
                
                {/* Title */}
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {stat.title}
                </p>
                
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
              
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

