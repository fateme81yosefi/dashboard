'use client'

import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function StatsCards() {
  const { t } = useTranslation()
  
  const stats = [
    {
      title: t('totalUsers'),
      value: '۱۲,۳۴۵',
      change: '+۱۲.۵%',
      trend: 'up',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      iconBg: 'bg-blue-500/10 dark:bg-blue-500/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: t('totalRevenue'),
      value: '۱۲,۳۴۵,۰۰۰',
      unit: t('toman'),
      change: '+۸.۲%',
      trend: 'up',
      icon: DollarSign,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      iconBg: 'bg-green-500/10 dark:bg-green-500/20',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      title: t('todayActivity'),
      value: '۱,۲۳۴',
      change: '+۵.۱%',
      trend: 'up',
      icon: Activity,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      iconBg: 'bg-purple-500/10 dark:bg-purple-500/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: t('monthlyGrowth'),
      value: '۲۳.۵%',
      change: '+۲.۳%',
      trend: 'up',
      icon: TrendingUp,
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20',
      iconBg: 'bg-orange-500/10 dark:bg-orange-500/20',
      iconColor: 'text-orange-600 dark:text-orange-400',
    },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div
            key={index}
            className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 transition-all duration-500 hover:-translate-y-1"
          >
            {/* Gradient Background Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            {/* Animated Border Gradient */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.iconBg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${stat.gradient} text-white text-xs font-semibold shadow-lg`}>
                  {stat.change}
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <div className="flex items-baseline space-x-2 space-x-reverse">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  {stat.unit && (
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-1 space-x-reverse pt-1">
                  <TrendingUp className={`w-4 h-4 ${
                    stat.trend === 'up'
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400 rotate-180'
                  }`} />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t('comparedToLastMonth')}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-5 rounded-tl-full -mr-12 -mb-12 group-hover:opacity-10 transition-opacity duration-500`}></div>
          </div>
        )
      })}
    </div>
  )
}

