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
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-blue-600',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10',
      iconBg: 'bg-blue-500/10 dark:bg-blue-500/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      changeColor: 'text-green-600 dark:text-green-400',
      borderColor: 'border-blue-200/50 dark:border-blue-800/50',
    },
    {
      title: t('totalRevenue'),
      value: formatNumberWithSeparator(12345000, language),
      unit: t('toman'),
      change: formatNumber('+8.2%', language),
      trend: 'up',
      icon: 'lucide:dollar-sign',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-emerald-600',
      bgGradient: 'bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-900/20 dark:to-emerald-800/10',
      iconBg: 'bg-green-500/10 dark:bg-green-500/20',
      iconColor: 'text-green-600 dark:text-green-400',
      changeColor: 'text-green-600 dark:text-green-400',
      borderColor: 'border-green-200/50 dark:border-green-800/50',
    },
    {
      title: t('todayActivity'),
      value: formatNumberWithSeparator(1234, language),
      change: formatNumber('+5.1%', language),
      trend: 'up',
      icon: 'lucide:activity',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-purple-600',
      bgGradient: 'bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10',
      iconBg: 'bg-purple-500/10 dark:bg-purple-500/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
      changeColor: 'text-green-600 dark:text-green-400',
      borderColor: 'border-purple-200/50 dark:border-purple-800/50',
    },
    {
      title: t('monthlyGrowth'),
      value: formatNumber('23.5%', language),
      change: formatNumber('+2.3%', language),
      trend: 'up',
      icon: 'lucide:trending-up',
      gradientFrom: 'from-orange-500',
      gradientTo: 'to-amber-600',
      bgGradient: 'bg-gradient-to-br from-orange-50 to-amber-100/50 dark:from-orange-900/20 dark:to-amber-800/10',
      iconBg: 'bg-orange-500/10 dark:bg-orange-500/20',
      iconColor: 'text-orange-600 dark:text-orange-400',
      changeColor: 'text-green-600 dark:text-green-400',
      borderColor: 'border-orange-200/50 dark:border-orange-800/50',
    },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        return (
          <div
            key={index}
            className={`group relative overflow-hidden ${stat.bgGradient} rounded-2xl shadow-lg hover:shadow-xl border ${stat.borderColor} p-6 transition-all duration-300 hover:-translate-y-1`}
          >
            {/* Decorative gradient overlay */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.gradientFrom} ${stat.gradientTo}`} />
            
            <div className="relative">
              {/* Header section */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.iconBg} backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon icon={stat.icon} className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/20 dark:border-gray-700/50`}>
                  <Icon 
                    icon={stat.trend === 'up' ? 'lucide:arrow-up' : 'lucide:arrow-down'} 
                    className={`w-3 h-3 ${stat.changeColor}`} 
                  />
                  <span className={`text-xs font-semibold ${stat.changeColor}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              
              {/* Content section */}
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  {stat.title}
                </p>
                <div className="flex items-baseline gap-2 space-x-reverse">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {stat.value}
                  </h3>
                  {stat.unit && (
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {stat.unit}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.gradientFrom} ${stat.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

