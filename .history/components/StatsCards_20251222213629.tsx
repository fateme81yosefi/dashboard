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
      color: 'bg-blue-500',
    },
    {
      title: t('totalRevenue'),
      value: '۱۲,۳۴۵,۰۰۰',
      unit: t('toman'),
      change: '+۸.۲%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-green-500',
    },
    {
      title: t('todayActivity'),
      value: '۱,۲۳۴',
      change: '+۵.۱%',
      trend: 'up',
      icon: Activity,
      color: 'bg-purple-500',
    },
    {
      title: t('monthlyGrowth'),
      value: '۲۳.۵%',
      change: '+۲.۳%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {stat.title}
                </p>
                <div className="flex items-baseline space-x-2 space-x-reverse">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </h3>
                  {stat.unit && (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <div className="flex items-center mt-2 space-x-1 space-x-reverse">
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === 'up'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t('comparedToLastMonth')}
                  </span>
                </div>
              </div>
              <div
                className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mx-3`}
              >
                <Icon className="w-6 h-6 text-white"  />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

