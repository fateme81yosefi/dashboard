'use client'

import Icon from '../Icon'
import BaseModal from './BaseModal'
import { useTranslation } from '@/hooks/useTranslation'

interface DeleteModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title?: string
  message?: string
  itemName?: string
  isLoading?: boolean
}

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  itemName,
  isLoading = false,
}: DeleteModalProps) {
  const { t } = useTranslation()

  const handleConfirm = () => {
    onConfirm()
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={title || t('deleteConfirm')}
      size="sm"
    >
      <div className="space-y-4">
        <div className="flex items-start space-x-4 space-x-reverse">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
              <Icon icon="lucide:alert-triangle" className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-gray-900 dark:text-white font-medium mb-2">
              {message || t('deleteMessage')}
            </p>
            {itemName && (
              <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                {itemName}
              </p>
            )}
            <p className="text-sm text-red-600 dark:text-red-400 mt-2">
              {t('deleteWarning')}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 space-x-reverse pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('cancel')}
          </button>
          <button
            onClick={handleConfirm}
            disabled={isLoading}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 space-x-reverse"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{t('delete')}...</span>
              </>
            ) : (
              <span>{t('delete')}</span>
            )}
          </button>
        </div>
      </div>
    </BaseModal>
  )
}
