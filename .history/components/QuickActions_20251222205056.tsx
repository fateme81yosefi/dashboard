'use client'

import { Plus, Download, Upload, FileText, Mail, Settings } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function QuickActions() {
  const { t } = useTranslation()
  
  const actions = [
    {
      icon: Plus,
      label: t('createNewProject'),
      color: 'bg-primary-500 hover:bg-primary-600',
    },
    {
      icon: Download,
      label: t('downloadReport'),
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Upload,
      label: t('uploadFile'),
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: FileText,
      label: t('createDocument'),
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
      icon: Mail,
      label: t('sendEmail'),
      color: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      icon: Settings,
      label: t('quickSettings'),
      color: 'bg-gray-500 hover:bg-gray-600',
    },
  ]
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
        {t('quickActions')}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <button
              key={index}
              className={`${action.color} text-white p-4 rounded-lg flex flex-col items-center justify-center space-y-2 transition-colors`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium text-center">{action.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

