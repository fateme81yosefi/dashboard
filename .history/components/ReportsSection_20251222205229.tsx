'use client'

import { Download, FileText, Calendar, TrendingUp } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function ReportsSection() {
  const { t, language } = useTranslation()
  
  const reports = [
    {
      id: 1,
      title: t('monthlySalesReport'),
      description: t('reportDescription'),
      date: language === 'fa' ? '۱۴۰۲/۰۹/۱۵' : '2023/12/06',
      type: t('sales'),
      size: language === 'fa' ? '۲.۵ ' + t('megabyte') : '2.5 ' + t('megabyte'),
      icon: TrendingUp,
      color: 'bg-green-500',
    },
    {
      id: 2,
      title: t('usersReport'),
      description: t('usersReportDesc'),
      date: language === 'fa' ? '۱۴۰۲/۰۹/۱۴' : '2023/12/05',
      type: t('users'),
      size: language === 'fa' ? '۱.۸ ' + t('megabyte') : '1.8 ' + t('megabyte'),
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      id: 3,
      title: t('activitiesReport'),
      description: t('activitiesReportDesc'),
      date: language === 'fa' ? '۱۴۰۲/۰۹/۱۳' : '2023/12/04',
      type: t('activity'),
      size: language === 'fa' ? '۳.۲ ' + t('megabyte') : '3.2 ' + t('megabyte'),
      icon: Calendar,
      color: 'bg-purple-500',
    },
    {
      id: 4,
      title: t('financialReport'),
      description: t('financialReportDesc'),
      date: language === 'fa' ? '۱۴۰۲/۰۹/۱۲' : '2023/12/03',
      type: t('financial'),
      size: language === 'fa' ? '۴.۱ ' + t('megabyte') : '4.1 ' + t('megabyte'),
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {reports.map((report) => {
        const Icon = report.icon
        return (
          <div
            key={report.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div
                  className={`${report.color} w-12 h-12 rounded-lg flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {report.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {report.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center space-x-1 space-x-reverse">
                  <Calendar className="w-4 h-4" />
                  <span>{report.date}</span>
                </span>
                <span>{report.size}</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-lg text-xs font-medium">
                  {report.type}
                </span>
                <button className="p-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

