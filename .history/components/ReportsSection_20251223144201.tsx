'use client'

import Icon from './Icon'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { formatNumber } from '@/lib/utils'
import EditReportModal from './modals/EditReportModal'
import DeleteModal from './modals/DeleteModal'

interface Report {
  id: number
  title: string
  description: string
  date: string
      type: string
      size: string
      icon: string
      color: string
}

export default function ReportsSection() {
  const { t, language } = useTranslation()
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [selectedReport, setSelectedReport] = useState<Report | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const [reports, setReports] = useState<Report[]>([
    {
      id: 1,
      title: t('monthlySalesReport'),
      description: t('reportDescription'),
      date: language === 'fa' ? formatNumber('1402/09/15', language) : '2023/12/06',
      type: t('sales'),
      size: formatNumber('2.5', language) + ' ' + t('megabyte'),
      icon: 'lucide:trending-up',
      color: 'bg-green-500',
    },
    {
      id: 2,
      title: t('usersReport'),
      description: t('usersReportDesc'),
      date: language === 'fa' ? formatNumber('1402/09/14', language) : '2023/12/05',
      type: t('users'),
      size: formatNumber('1.8', language) + ' ' + t('megabyte'),
      icon: 'lucide:file-text',
      color: 'bg-blue-500',
    },
    {
      id: 3,
      title: t('activitiesReport'),
      description: t('activitiesReportDesc'),
      date: language === 'fa' ? formatNumber('1402/09/13', language) : '2023/12/04',
      type: t('activity'),
      size: formatNumber('3.2', language) + ' ' + t('megabyte'),
      icon: 'lucide:calendar',
      color: 'bg-purple-500',
    },
    {
      id: 4,
      title: t('financialReport'),
      description: t('financialReportDesc'),
      date: language === 'fa' ? formatNumber('1402/09/12', language) : '2023/12/03',
      type: t('financial'),
      size: formatNumber('4.1', language) + ' ' + t('megabyte'),
      icon: 'lucide:trending-up',
      color: 'bg-orange-500',
    },
  ])

  const handleEdit = (report: Report) => {
    setSelectedReport(report)
    setEditModalOpen(true)
  }

  const handleDelete = (report: Report) => {
    setSelectedReport(report)
    setDeleteModalOpen(true)
  }

  const handleSaveEdit = async (updatedReport: { id: number; title: string; description: string; type: string }) => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setReports(reports.map(r => {
      if (r.id === updatedReport.id) {
        return { ...r, ...updatedReport }
      }
      return r
    }))
    setIsLoading(false)
    setEditModalOpen(false)
    setSelectedReport(null)
  }

  const handleConfirmDelete = async () => {
    if (!selectedReport) return
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setReports(reports.filter(r => r.id !== selectedReport.id))
    setIsLoading(false)
    setDeleteModalOpen(false)
    setSelectedReport(null)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => {
          return (
            <div
              key={report.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center ">
                  <div
                    className={`${report.color} w-12 h-12 rounded-lg flex items-center justify-center mx-3`}
                  >
                    <Icon icon={report.icon} className="w-6 h-6 text-white" />
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
                    <Calendar className="w-4 h-4 mx-2" />
                    <span>{report.date}</span>
                  </span>
                  <span>{report.size}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-lg text-xs font-medium">
                    {report.type}
                  </span>
                  <button 
                    onClick={() => handleEdit(report)}
                    className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                    title={t('edit')}
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(report)}
                    className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                    title={t('delete')}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <EditReportModal
        isOpen={editModalOpen}
        onClose={() => {
          setEditModalOpen(false)
          setSelectedReport(null)
        }}
        onSave={handleSaveEdit}
        report={selectedReport}
        isLoading={isLoading}
      />

      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false)
          setSelectedReport(null)
        }}
        onConfirm={handleConfirmDelete}
        title={t('deleteReport')}
        itemName={selectedReport?.title}
        isLoading={isLoading}
      />
    </>
  )
}

