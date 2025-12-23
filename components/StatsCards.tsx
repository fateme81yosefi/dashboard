'use client'

import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react'
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
      icon: Users,
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: t('totalRevenue'),
      value: formatNumberWithSeparator(12345000, language),
      unit: t('toman'),
      change: formatNumber('+8.2%', language),
      trend: 'up',
      icon: DollarSign,
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      title: t('todayActivity'),
      value: formatNumberWithSeparator(1234, language),
      change: formatNumber('+5.1%', language),
      trend: 'up',
      icon: Activity,
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: t('monthlyGrowth'),
      value: formatNumber('23.5%', language),
      change: formatNumber('+2.3%', language),
      trend: 'up',
      icon: TrendingUp,
      iconColor: 'text-orange-600 dark:text-orange-400',
    },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700`}>
                <Icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
              <span className={`text-xs font-medium ${
                stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {stat.change}
              </span>
            </div>
            
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                {stat.title}
              </p>
              <div className="flex items-baseline space-x-2 space-x-reverse">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </h3>
                {stat.unit && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.unit}
                  </span>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

