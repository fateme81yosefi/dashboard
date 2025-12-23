'use client'

import { useState } from 'react'
import BaseModal from './BaseModal'
import { useTranslation } from '@/hooks/useTranslation'

interface Document {
  title: string
  description: string
}

interface CreateDocumentModalProps {
  isOpen: boolean
  onClose: () => void
  onCreate: (document: Document) => void
  isLoading?: boolean
}

export default function CreateDocumentModal({
  isOpen,
  onClose,
  onCreate,
  isLoading = false,
}: CreateDocumentModalProps) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<Document>({
    title: '',
    description: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreate(formData)
    setFormData({
      title: '',
      description: '',
    })
  }

  const handleClose = () => {
    setFormData({
      title: '',
      description: '',
    })
    onClose()
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleClose}
      title={t('createDocument')}
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('title')}
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('description')}
          </label>
          <textarea
            required
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
          />
        </div>

        <div className="flex items-center justify-end space-x-3 space-x-reverse pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={handleClose}
            disabled={isLoading}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('cancel')}
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 space-x-reverse"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{t('create')}...</span>
              </>
            ) : (
              <span>{t('create')}</span>
            )}
          </button>
        </div>
      </form>
    </BaseModal>
  )
}
