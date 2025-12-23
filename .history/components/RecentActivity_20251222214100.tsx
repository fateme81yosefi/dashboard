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
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 md:p-8 transition-all duration-500 overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-blue-900/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {t('recentActivity')}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            آخرین فعالیت‌های سیستم
          </p>
        </div>
        <button className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 px-4 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300">
          {t('viewAll')}
        </button>
      </div>

      {/* Activities List */}
      <div className="relative z-10 space-y-3">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <div
              key={activity.id}
              className="group relative flex items-start p-4 rounded-xl hover:bg-gradient-to-r hover:from-white hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700/50 transition-all duration-300 hover:shadow-md border border-transparent hover:border-gray-200/50 dark:hover:border-gray-700/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline Line */}
              {index < activities.length - 1 && (
                <div className="absolute right-5 top-12 w-0.5 h-full bg-gray-200 dark:bg-gray-700 group-hover:bg-gradient-to-b group-hover:from-primary-400 group-hover:to-primary-600 transition-colors duration-300"></div>
              )}
              
              {/* Icon */}
              <div className="relative z-10">
                <div
                  className={`${activity.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mx-3 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                  {activity.description}
                </p>
                <div className="flex items-center mt-3 space-x-2 space-x-reverse">
                  <div className="flex items-center space-x-1 space-x-reverse px-2 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Hover Indicator */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-primary-500 to-primary-600 rounded-r-full group-hover:h-8 transition-all duration-300"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

