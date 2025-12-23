'use client'

import { useState } from 'react'
import Icon from './Icon'
import { useApp } from '@/contexts/AppContext'
import { useTranslation } from '@/hooks/useTranslation'
import Select from './Select'

export default function SettingsForm() {
  const { language, theme, setLanguage, setTheme } = useApp()
  const { t } = useTranslation()
  const [settings, setSettings] = useState({
    notifications: true,
    emailNotifications: true,
    smsNotifications: false,
    twoFactorAuth: false,
  })

  const handleChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-6">
      {/* تنظیمات اعلان‌ها */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300">
        <div className="flex items-center space-x-3 space-x-reverse mb-6">
          <Bell className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t('notificationSettings')}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-white">
                {t('enableNotifications')}
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('enableNotificationsDesc')}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleChange('notifications', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-white">
                {t('emailNotifications')}
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('emailNotificationsDesc')}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) =>
                  handleChange('emailNotifications', e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-white">
                {t('smsNotifications')}
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('smsNotificationsDesc')}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.smsNotifications}
                onChange={(e) =>
                  handleChange('smsNotifications', e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* تنظیمات امنیتی */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300">
        <div className="flex items-center space-x-3 space-x-reverse mb-6">
          <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t('securitySettings')}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-900 dark:text-white">
                {t('twoFactorAuth')}
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('twoFactorAuthDesc')}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.twoFactorAuth}
                onChange={(e) =>
                  handleChange('twoFactorAuth', e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* تنظیمات عمومی */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300">
        <div className="flex items-center space-x-3 space-x-reverse mb-6">
          <Globe className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t('generalSettings')}
          </h2>
        </div>

        <div className="space-y-4">
          <Select
            label={t('systemLanguage')}
            value={language}
            onChange={(value) => setLanguage(value as 'fa' | 'en')}
            options={[
              { value: 'fa', label: 'فارسی' },
              { value: 'en', label: 'English' },
            ]}
          />

          <Select
            label={t('displayTheme')}
            value={theme}
            onChange={(value) => setTheme(value as 'light' | 'dark')}
            options={[
              { value: 'light', label: t('light') },
              { value: 'dark', label: t('dark') },
            ]}
          />
        </div>
      </div>

      {/* دکمه ذخیره */}
      <div className="flex justify-end">
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 space-x-reverse">
          <Save className="w-5 h-5" />
          <span>{t('saveSettings')}</span>
        </button>
      </div>
    </div>
  )
}

