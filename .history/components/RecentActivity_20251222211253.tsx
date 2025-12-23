'use client'

import { Clock, User, ShoppingCart, FileText } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function RecentActivity() {
  const { t, language } = useTranslation()
  
  const activities = [
    {
      id: 1,
      type: 'user',
      title: t('newUserRegistered'),
      description: language === 'fa' ? 'علی احمدی در سیستم ثبت نام کرد' : 'Ali Ahmadi registered in the system',
      time: language === 'fa' ? '۵ ' + t('minutesAgo') : '5 ' + t('minutesAgo'),
      icon: User,
      color: 'bg-blue-500',
    },
    {
      id: 2,
      type: 'order',
      title: t('newOrderReceived'),
      description: language === 'fa' ? 'سفارش شماره #۱۲۳۴ ثبت شد' : 'Order #1234 was registered',
      time: language === 'fa' ? '۱۵ ' + t('minutesAgo') : '15 ' + t('minutesAgo'),
      icon: ShoppingCart,
      color: 'bg-green-500',
    },
    {
      id: 3,
      type: 'document',
      title: t('newDocumentAdded'),
      description: language === 'fa' ? 'راهنمای استفاده از سیستم به‌روزرسانی شد' : 'System usage guide has been updated',
      time: language === 'fa' ? '۱ ' + t('hoursAgo') : '1 ' + t('hoursAgo'),
      icon: FileText,
      color: 'bg-purple-500',
    },
    {
      id: 4,
      type: 'user',
      title: t('userProfileUpdated'),
      description: language === 'fa' ? 'محمد رضایی پروفایل خود را ویرایش کرد' : 'Mohammad Rezaei edited his profile',
      time: language === 'fa' ? '۲ ' + t('hoursAgo') : '2 ' + t('hoursAgo'),
      icon: User,
      color: 'bg-blue-500',
    },
    {
      id: 5,
      type: 'order',
      title: t('orderDelivered'),
      description: language === 'fa' ? 'سفارش شماره #۱۲۳۰ با موفقیت تحویل داده شد' : 'Order #1230 was successfully delivered',
      time: language === 'fa' ? '۳ ' + t('hoursAgo') : '3 ' + t('hoursAgo'),
      icon: ShoppingCart,
      color: 'bg-green-500',
    },
  ]
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {t('recentActivity')}
        </h3>
        <button className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
          {t('viewAll')}
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div
              key={activity.id}
              className="flex items-start space-x-4 space-x-reverse p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div
                className={`${activity.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 `}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {activity.description}
                </p>
                <div className="flex items-center mt-2 space-x-1 space-x-reverse">
                  <Clock className="w-4 h-4 text-gray-400" />
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

