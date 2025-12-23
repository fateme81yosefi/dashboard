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
      change: formatNumber('+12.5%', language),
      trend: 'up',
      icon: 'lucide:users',
      color: 'blue',
      gradient: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: t('totalRevenue'),
      value: formatNumberWithSeparator(12345000, language),
      unit: t('toman'),
      change: formatNumber('+8.2%', language),
      trend: 'up',
      icon: 'lucide:dollar-sign',
      color: 'emerald',
      gradient: 'from-emerald-400 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      textColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      title: t('todayActivity'),
      value: formatNumberWithSeparator(1234, language),
      change: formatNumber('+5.1%', language),
      trend: 'up',
      icon: 'lucide:activity',
      color: 'purple',
      gradient: 'from-purple-400 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      textColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: t('monthlyGrowth'),
      value: formatNumber('23.5%', language),
      change: formatNumber('+2.3%', language),
      trend: 'up',
      icon: 'lucide:trending-up',
      color: 'orange',
      gradient: 'from-orange-400 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      textColor: 'text-orange-600 dark:text-orange-400',
    },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        return (
          <div
            key={index}
            className="group relative"
          >
            {/* Card with left accent border */}
            <div className={`relative h-full bg-gradient-to-br ${stat.bgGradient} rounded-xl border-r-4 ${stat.borderColor} border-t border-b border-l border-gray-200/50 dark:border-gray-700/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
              {/* Left accent border gradient */}
              <div className={`absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b ${stat.gradient} opacity-100`} />
              
              {/* Content */}
              <div className="relative p-5">
                {/* Header with icon and trend */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105`}>
                    <Icon icon={stat.icon} className={`w-6 h-6 ${stat.textColor}`} />
                  </div>
                  
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${
                    stat.trend === 'up'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                  }`}>
                    <Icon 
                      icon={stat.trend === 'up' ? 'lucide:arrow-up-right' : 'lucide:arrow-down-right'} 
                      className={`w-3 h-3`} 
                    />
                    <span className="text-xs font-bold">
                      {stat.change}
                    </span>
                  </div>
                </div>
                
                {/* Title */}
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
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
                
                {/* Decorative bottom line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

