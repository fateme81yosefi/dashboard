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
  const actionColors = [
    { gradient: 'from-primary-500 to-primary-600', hover: 'hover:from-primary-600 hover:to-primary-700' },
    { gradient: 'from-green-500 to-emerald-600', hover: 'hover:from-green-600 hover:to-emerald-700' },
    { gradient: 'from-blue-500 to-cyan-600', hover: 'hover:from-blue-600 hover:to-cyan-700' },
    { gradient: 'from-purple-500 to-pink-600', hover: 'hover:from-purple-600 hover:to-pink-700' },
    { gradient: 'from-orange-500 to-amber-600', hover: 'hover:from-orange-600 hover:to-amber-700' },
    { gradient: 'from-gray-500 to-slate-600', hover: 'hover:from-gray-600 hover:to-slate-700' },
  ]
  
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 md:p-8 transition-all duration-500 overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-primary-50/30 dark:from-gray-900/50 dark:to-primary-900/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Header */}
      <div className="relative z-10 mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {t('quickActions')}
        </h3>
    
      </div>
      
      {/* Actions Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon
          const colors = actionColors[index] || actionColors[0]
          return (
            <button
              key={index}
              className={`group relative bg-gradient-to-br ${colors.gradient} ${colors.hover} text-white p-5 rounded-xl flex flex-col items-center justify-center space-y-3 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden`}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Icon */}
              <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7" />
              </div>
              
              {/* Label */}
              <span className="relative z-10 text-sm font-semibold text-center leading-tight">
                {action.label}
              </span>
              
              {/* Decorative Circle */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors"></div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

