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
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
      iconBg: 'bg-blue-500',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: t('totalRevenue'),
      value: formatNumberWithSeparator(12345000, language),
      unit: t('toman'),
      icon: 'lucide:dollar-sign',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20',
      iconBg: 'bg-emerald-500',
      textColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      title: t('todayActivity'),
      value: formatNumberWithSeparator(1234, language),
      icon: 'lucide:activity',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20',
      iconBg: 'bg-purple-500',
      textColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: t('monthlyGrowth'),
      value: formatNumber('23.5%', language),
      icon: 'lucide:trending-up',
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20',
      iconBg: 'bg-orange-500',
      textColor: 'text-orange-600 dark:text-orange-400',
    },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        return (
          <div
            key={index}
            className="group relative"
          >
            {/* Main card */}
            <div className={`relative h-full bg-gradient-to-br ${stat.bgGradient} rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
              {/* Decorative gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative p-6">
                {/* Icon section */}
                <div className="mb-6">
                  <div className={`relative ${stat.iconBg} p-4 rounded-2xl shadow-lg w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon icon={stat.icon} className="w-7 h-7 text-white" />
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl ${stat.iconBg} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`} />
                  </div>
                </div>
                
                {/* Title */}
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">
                  {stat.title}
                </p>
                
                {/* Value */}
                <div className="flex items-baseline gap-2 space-x-reverse">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {stat.value}
                  </h3>
                  {stat.unit && (
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {stat.unit}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              
              {/* Corner decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${stat.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-bl-2xl`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

