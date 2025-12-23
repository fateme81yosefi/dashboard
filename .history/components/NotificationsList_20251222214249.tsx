'use client'

import { Bell, CheckCircle, AlertCircle, Info, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { formatNumber, formatNumberWithSeparator } from '@/lib/utils'

export default function NotificationsList() {
  const { t, language } = useTranslation()
  
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: t('orderSuccessfullyRegistered'),
      message: language === 'fa' ? `سفارش شماره #${formatNumber('1234', language)} با موفقیت در سیستم ثبت شد` : 'Order #1234 was successfully registered in the system',
      time: formatNumber('5', language) + ' ' + t('minutesAgo'),
      read: false,
      icon: CheckCircle,
      color: 'bg-green-500',
    },
    {
      id: 2,
      type: 'warning',
      title: t('inventoryWarning'),
      message: language === 'fa' ? `موجودی محصول "لپ‌تاپ" به کمتر از ${formatNumber('10', language)} عدد رسیده است` : 'Product "Laptop" inventory has dropped below 10 units',
      time: formatNumber('15', language) + ' ' + t('minutesAgo'),
      read: false,
      icon: AlertCircle,
      color: 'bg-yellow-500',
    },
    {
      id: 3,
      type: 'info',
      title: t('systemUpdate'),
      message: language === 'fa' ? 'نسخه جدید سیستم آماده نصب است' : 'New system version is ready to install',
      time: formatNumber('1', language) + ' ' + t('hoursAgo'),
      read: true,
      icon: Info,
      color: 'bg-blue-500',
    },
    {
      id: 4,
      type: 'success',
      title: t('paymentSuccess'),
      message: language === 'fa' ? `پرداخت مبلغ ${formatNumberWithSeparator(500000, language)} تومان با موفقیت انجام شد` : 'Payment of 500,000 Toman was successfully completed',
      time: formatNumber('2', language) + ' ' + t('hoursAgo'),
      read: true,
      icon: CheckCircle,
      color: 'bg-green-500',
    },
  ]
  
  const [items, setItems] = useState(notifications)

  const markAsRead = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, read: true } : item
      )
    )
  }

  const removeNotification = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {t('recentNotifications')}
        </h2>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {items.length === 0 ? (
          <div className="p-12 text-center">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              {t('noNotifications')}
            </p>
          </div>
        ) : (
          items.map((notification) => {
            const Icon = notification.icon
            return (
              <div
                key={notification.id}
                className={`p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  !notification.read ? 'bg-primary-50 dark:bg-primary-900/10' : ''
                }`}
              >
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div
                    className={`${notification.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {notification.title}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                          {notification.time}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse mr-4">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            {t('markAsRead')}
                          </button>
                        )}
                        <button
                          onClick={() => removeNotification(notification.id)}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

