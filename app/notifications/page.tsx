'use client'

import DashboardLayout from '@/components/DashboardLayout'
import NotificationsList from '@/components/NotificationsList'
import { useTranslation } from '@/hooks/useTranslation'

export default function NotificationsPage() {
  const { t } = useTranslation()
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('notificationsTitle')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {t('notificationsDescription')}
            </p>
          </div>
          <button className="text-primary-600 dark:text-primary-400 hover:underline">
            {t('markAllAsRead')}
          </button>
        </div>

        <NotificationsList />
      </div>
    </DashboardLayout>
  )
}

