'use client'

import DashboardLayout from '@/components/DashboardLayout'
import SettingsForm from '@/components/SettingsForm'
import { useTranslation } from '@/hooks/useTranslation'

export default function SettingsPage() {
  const { t } = useTranslation()
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t('systemSettings')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {t('settingsDescription')}
          </p>
        </div>

        <SettingsForm />
      </div>
    </DashboardLayout>
  )
}

