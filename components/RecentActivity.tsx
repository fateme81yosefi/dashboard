'use client'

import { Clock, User, ShoppingCart, FileText } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { formatNumber } from '@/lib/utils'

export default function RecentActivity() {
  const { t, language } = useTranslation()
  
  const activities = [
    {
      id: 1,
      title: t('newUserRegistered'),
      description: language === 'fa' ? 'علی احمدی در سیستم ثبت نام کرد' : 'Ali Ahmadi registered in the system',
      time: formatNumber('5', language) + ' ' + t('minutesAgo'),
      icon: User,
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 2,
      title: t('newOrderReceived'),
      description: language === 'fa' ? `سفارش شماره #${formatNumber('1234', language)} ثبت شد` : `Order #1234 was registered`,
      time: formatNumber('15', language) + ' ' + t('minutesAgo'),
      icon: ShoppingCart,
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      id: 3,
      title: t('newDocumentAdded'),
      description: language === 'fa' ? 'راهنمای استفاده از سیستم به‌روزرسانی شد' : 'System usage guide has been updated',
      time: formatNumber('1', language) + ' ' + t('hoursAgo'),
      icon: FileText,
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      id: 4,
      title: t('userProfileUpdated'),
      description: language === 'fa' ? 'محمد رضایی پروفایل خود را ویرایش کرد' : 'Mohammad Rezaei edited his profile',
      time: formatNumber('2', language) + ' ' + t('hoursAgo'),
      icon: User,
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 5,
      title: t('orderDelivered'),
      description: language === 'fa' ? `سفارش شماره #${formatNumber('1230', language)} با موفقیت تحویل داده شد` : 'Order #1230 was successfully delivered',
      time: formatNumber('3', language) + ' ' + t('hoursAgo'),
      icon: ShoppingCart,
      iconColor: 'text-green-600 dark:text-green-400',
    },
  ]
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {t('recentActivity')}
      </h3>

      <div className="space-y-3">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div
              key={activity.id}
              className="flex items-start space-x-3 space-x-reverse p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700`}>
                <Icon className={`w-4 h-4 ${activity.iconColor}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                  {activity.title}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  {activity.description}
                </p>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

