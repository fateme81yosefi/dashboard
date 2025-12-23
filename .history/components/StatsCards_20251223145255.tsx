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
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500',
      lightBg: 'bg-blue-500/10 dark:bg-blue-500/5',
      iconBg: 'bg-blue-500/20 dark:bg-blue-500/10',
      textColor: 'text-blue-600 dark:text-blue-400',
      changeBg: 'bg-green-500/10 dark:bg-green-500/10',
      changeText: 'text-green-600 dark:text-green-400',
    },
    {
      title: t('totalRevenue'),
      value: formatNumberWithSeparator(12345000, language),
      unit: t('toman'),
      change: formatNumber('+8.2%', language),
      trend: 'up',
      icon: 'lucide:dollar-sign',
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500',
      lightBg: 'bg-emerald-500/10 dark:bg-emerald-500/5',
      iconBg: 'bg-emerald-500/20 dark:bg-emerald-500/10',
      textColor: 'text-emerald-600 dark:text-emerald-400',
      changeBg: 'bg-green-500/10 dark:bg-green-500/10',
      changeText: 'text-green-600 dark:text-green-400',
    },
    {
      title: t('todayActivity'),
      value: formatNumberWithSeparator(1234, language),
      change: formatNumber('+5.1%', language),
      trend: 'up',
      icon: 'lucide:activity',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500',
      lightBg: 'bg-purple-500/10 dark:bg-purple-500/5',
      iconBg: 'bg-purple-500/20 dark:bg-purple-500/10',
      textColor: 'text-purple-600 dark:text-purple-400',
      changeBg: 'bg-green-500/10 dark:bg-green-500/10',
      changeText: 'text-green-600 dark:text-green-400',
    },
    {
      title: t('monthlyGrowth'),
      value: formatNumber('23.5%', language),
      change: formatNumber('+2.3%', language),
      trend: 'up',
      icon: 'lucide:trending-up',
      gradient: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-500',
      lightBg: 'bg-orange-500/10 dark:bg-orange-500/5',
      iconBg: 'bg-orange-500/20 dark:bg-orange-500/10',
      textColor: 'text-orange-600 dark:text-orange-400',
      changeBg: 'bg-green-500/10 dark:bg-green-500/10',
      changeText: 'text-green-600 dark:text-green-400',
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
            {/* Main card container */}
            <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Top gradient section */}
              <div className={`relative h-24 bg-gradient-to-r ${stat.gradient} overflow-hidden`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }} />
                </div>
                
                {/* Icon container */}
                <div className="absolute bottom-0 right-6 transform translate-y-1/2">
                  <div className={`relative ${stat.iconBg} p-4 rounded-2xl backdrop-blur-sm border-2 border-white/20 dark:border-gray-700/30 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon icon={stat.icon} className={`w-8 h-8 ${stat.textColor}`} />
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl ${stat.bgColor} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  </div>
                </div>
                
                {/* Trend indicator */}
                <div className="absolute top-4 left-4">
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${stat.changeBg} backdrop-blur-sm border border-white/20 dark:border-gray-700/30`}>
                    <Icon 
                      icon={stat.trend === 'up' ? 'lucide:trending-up' : 'lucide:trending-down'} 
                      className={`w-4 h-4 ${stat.changeText}`} 
                    />
                    <span className={`text-xs font-bold ${stat.changeText}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Content section */}
              <div className="p-6 pt-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                  {stat.title}
                </p>
                
                <div className="flex items-baseline gap-2 space-x-reverse">
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
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              
              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

