'use client'

import { Clock, User, ShoppingCart, FileText, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { formatNumber } from '@/lib/utils'

export default function RecentActivity() {
  const { t, language } = useTranslation()
  
  const activities = [
    {
      id: 1,
      type: 'user',
      title: t('newUserRegistered'),
      description: language === 'fa' ? 'علی احمدی در سیستم ثبت نام کرد' : 'Ali Ahmadi registered in the system',
      time: formatNumber('5', language) + ' ' + t('minutesAgo'),
      icon: User,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10',
      borderColor: 'border-blue-200 dark:border-blue-800',
    },
    {
      id: 2,
      type: 'order',
      title: t('newOrderReceived'),
      description: language === 'fa' ? `سفارش شماره #${formatNumber('1234', language)} ثبت شد` : `Order #1234 was registered`,
      time: formatNumber('15', language) + ' ' + t('minutesAgo'),
      icon: ShoppingCart,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10',
      borderColor: 'border-green-200 dark:border-green-800',
    },
    {
      id: 3,
      type: 'document',
      title: t('newDocumentAdded'),
      description: language === 'fa' ? 'راهنمای استفاده از سیستم به‌روزرسانی شد' : 'System usage guide has been updated',
      time: formatNumber('1', language) + ' ' + t('hoursAgo'),
      icon: FileText,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/10',
      borderColor: 'border-purple-200 dark:border-purple-800',
    },
    {
      id: 4,
      type: 'user',
      title: t('userProfileUpdated'),
      description: language === 'fa' ? 'محمد رضایی پروفایل خود را ویرایش کرد' : 'Mohammad Rezaei edited his profile',
      time: formatNumber('2', language) + ' ' + t('hoursAgo'),
      icon: User,
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/10',
      borderColor: 'border-blue-200 dark:border-blue-800',
    },
    {
      id: 5,
      type: 'order',
      title: t('orderDelivered'),
      description: language === 'fa' ? `سفارش شماره #${formatNumber('1230', language)} با موفقیت تحویل داده شد` : 'Order #1230 was successfully delivered',
      time: formatNumber('3', language) + ' ' + t('hoursAgo'),
      icon: ShoppingCart,
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/10',
      borderColor: 'border-green-200 dark:border-green-800',
    },
  ]
  
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 md:p-8 transition-all duration-500 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-purple-50/20 dark:from-primary-900/10 dark:via-transparent dark:to-purple-900/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-transparent rounded-bl-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-200/20 to-transparent rounded-tr-full blur-2xl"></div>
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3 space-x-reverse">
          <div className="p-2 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {t('recentActivity')}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              {language === 'fa' ? 'آخرین فعالیت‌های سیستم' : 'Latest system activities'}
            </p>
          </div>
        </div>
        <button className="group flex items-center space-x-2 space-x-reverse text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 px-4 py-2 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-105">
          <span>{t('viewAll')}</span>
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Activities List */}
      <div className="relative z-10 space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          const isLast = index === activities.length - 1
          
          return (
            <div
              key={activity.id}
              className="group relative"
            >
          
              
              {/* Activity Card */}
              <div className={`relative  bg-gradient-to-br ${activity.bgGradient} dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border ${activity.borderColor} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-1 group-hover:scale-[1.02]`}>
                {/* Shine Effect */}
                
                <div className="relative flex items-start space-x-4 space-x-reverse">
                  {/* Icon Container */}
                  <div className={`relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${activity.gradient} shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-7 h-7 text-white relative z-10" />
                    <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {activity.title}
                      </h4>
                      {index === 0 && (
                        <div className="flex-shrink-0 mr-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                      {activity.description}
                    </p>
                    
                    {/* Time Badge */}
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="flex items-center space-x-1.5 space-x-reverse px-3 py-1.5 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200/50 dark:border-gray-600/50">
                        <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          {activity.time}
                        </span>
                      </div>
                      
                      {/* Status Indicator */}
                      {index === 0 && (
                        <div className="flex items-center space-x-1 space-x-reverse px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                          <span className="text-xs font-medium text-green-700 dark:text-green-400">
                            {language === 'fa' ? 'جدید' : 'New'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 ${activity.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-800 to-transparent pointer-events-none"></div>
    </div>
  )
}

