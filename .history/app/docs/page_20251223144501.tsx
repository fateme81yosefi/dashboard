'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import CreateDocumentModal from '@/components/modals/CreateDocumentModal'
import DeleteModal from '@/components/modals/DeleteModal'
import { useTranslation } from '@/hooks/useTranslation'
import Icon from '@/components/Icon'

interface Document {
  id: number
  title: string
  description: string
}

export default function DocsPage() {
  const { t } = useTranslation()
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [documents, setDocuments] = useState<Document[]>([
    { id: 1, title: 'شروع سریع', description: 'راهنمای شروع کار با سیستم' },
    { id: 2, title: 'راهنمای کاربری', description: 'آموزش استفاده از امکانات' },
    { id: 3, title: 'API Documentation', description: 'مستندات API و وب‌سرویس' },
    { id: 4, title: 'امنیت', description: 'راهنمای امنیت و حریم خصوصی' },
    { id: 5, title: 'سوالات متداول', description: 'پاسخ به سوالات رایج' },
    { id: 6, title: 'پشتیبانی', description: 'راه‌های ارتباط با پشتیبانی' },
  ])

  const handleCreateDocument = async (docData: {
    title: string
    description: string
  }) => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    const newDoc: Document = {
      id: Date.now(),
      ...docData,
    }
    setDocuments([...documents, newDoc])
    setIsLoading(false)
    setCreateModalOpen(false)
  }

  const handleDelete = (doc: Document) => {
    setSelectedDocument(doc)
    setDeleteModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!selectedDocument) return
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setDocuments(documents.filter(d => d.id !== selectedDocument.id))
    setIsLoading(false)
    setDeleteModalOpen(false)
    setSelectedDocument(null)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('docs')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              راهنمای استفاده از سیستم و مستندات فنی
            </p>
          </div>
          <button 
            onClick={() => setCreateModalOpen(true)}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 space-x-reverse"
          >
            <Icon icon="lucide:plus" className="w-5 h-5" />
            <span>{t('createDocument')}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow relative group"
            >
              <button
                onClick={() => handleDelete(doc)}
                className="absolute top-4 left-4 p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                title={t('delete')}
              >
                <Icon icon="lucide:trash-2" className="w-4 h-4" />
              </button>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {doc.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {doc.description}
              </p>
            </div>
          ))}
        </div>

        <CreateDocumentModal
          isOpen={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onCreate={handleCreateDocument}
          isLoading={isLoading}
        />

        <DeleteModal
          isOpen={deleteModalOpen}
          onClose={() => {
            setDeleteModalOpen(false)
            setSelectedDocument(null)
          }}
          onConfirm={handleConfirmDelete}
          title={t('deleteDocument')}
          itemName={selectedDocument?.title}
          isLoading={isLoading}
        />
      </div>
    </DashboardLayout>
  )
}

