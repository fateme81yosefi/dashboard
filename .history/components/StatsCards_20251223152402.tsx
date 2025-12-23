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
      bgGradient: 'from-blue-50/50 to-cyan-50/50 dark:from-blue-950/30 dark:to-cyan-950/30',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: t('totalRevenue'),
      value: formatNumberWithSeparator(12345000, language),
      unit: t('toman'),
      icon: 'lucide:dollar-sign',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/30',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      textColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      title: t('todayActivity'),
      value: formatNumberWithSeparator(1234, language),
      icon: 'lucide:activity',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
      textColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: t('monthlyGrowth'),
      value: formatNumber('23.5%', language),
      icon: 'lucide:trending-up',
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50/50 to-amber-50/50 dark:from-orange-950/30 dark:to-amber-950/30',
      iconBg: 'bg-gradient-to-br from-orange-500 to-amber-500',
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
            {/* Card */}
            <div className={`relative h-full bg-gradient-to-br ${stat.bgGradient} rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
              {/* Top gradient section */}
              <div className={`relative h-20 bg-gradient-to-r ${stat.gradient} overflow-hidden`}>
                {/* Pattern dots */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                
                {/* Icon floating */}
                <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
                  <div className={`relative ${stat.iconBg} p-3 rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <Icon icon={stat.icon} className="w-8 h-8 text-white" />
                    {/* Glow */}
                    <div className={`absolute inset-0 rounded-2xl ${stat.iconBg} opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-500`} />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="pt-12 pb-6 px-6">
                {/* Title */}
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3 text-center">
                  {stat.title}
                </p>
                
                {/* Value */}
                <div className="flex items-baseline justify-center gap-2 space-x-reverse">
                  <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    {stat.value}
                  </h3>
                  {stat.unit && (
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      {stat.unit}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />
              
              {/* Corner decorations */}
              <div className={`absolute top-2 right-2 w-16 h-16 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-500`} />
              <div className={`absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 blur-lg rounded-full transition-opacity duration-500`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

