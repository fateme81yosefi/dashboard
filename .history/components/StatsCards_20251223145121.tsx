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
      primaryColor: 'blue',
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      lightBg: 'bg-blue-500/5',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      glowColor: 'shadow-blue-500/20',
    },
    {
      title: t('totalRevenue'),
      value: formatNumberWithSeparator(12345000, language),
      unit: t('toman'),
      change: formatNumber('+8.2%', language),
      trend: 'up',
      icon: 'lucide:dollar-sign',
      primaryColor: 'emerald',
      gradient: 'from-emerald-500 via-emerald-600 to-green-600',
      lightBg: 'bg-emerald-500/5',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-green-600',
      glowColor: 'shadow-emerald-500/20',
    },
    {
      title: t('todayActivity'),
      value: formatNumberWithSeparator(1234, language),
      change: formatNumber('+5.1%', language),
      trend: 'up',
      icon: 'lucide:activity',
      primaryColor: 'purple',
      gradient: 'from-purple-500 via-purple-600 to-purple-700',
      lightBg: 'bg-purple-500/5',
      iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
      glowColor: 'shadow-purple-500/20',
    },
    {
      title: t('monthlyGrowth'),
      value: formatNumber('23.5%', language),
      change: formatNumber('+2.3%', language),
      trend: 'up',
      icon: 'lucide:trending-up',
      primaryColor: 'orange',
      gradient: 'from-orange-500 via-orange-600 to-amber-600',
      lightBg: 'bg-orange-500/5',
      iconBg: 'bg-gradient-to-br from-orange-500 to-amber-600',
      glowColor: 'shadow-orange-500/20',
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
            {/* Main card */}
            <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Decorative circles */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-700 group-hover:scale-150`} />
              <div className={`absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-700 group-hover:scale-150`} />
              
              <div className="relative z-10">
                {/* Icon section */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`relative ${stat.iconBg} p-4 rounded-2xl shadow-lg ${stat.glowColor} group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon icon={stat.icon} className="w-6 h-6 text-white" />
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Trend badge */}
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
                    stat.trend === 'up' 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                  } border ${
                    stat.trend === 'up'
                      ? 'border-green-200 dark:border-green-800'
                      : 'border-red-200 dark:border-red-800'
                  }`}>
                    <Icon 
                      icon={stat.trend === 'up' ? 'lucide:trending-up' : 'lucide:trending-down'} 
                      className="w-3.5 h-3.5" 
                    />
                    <span className="text-xs font-bold">
                      {stat.change}
                    </span>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {stat.title}
                  </p>
                  
                  <div className="flex items-baseline gap-2 space-x-reverse">
                    <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                      {stat.value}
                    </h3>
                    {stat.unit && (
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-bl-3xl transition-opacity duration-500`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

