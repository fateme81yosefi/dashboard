'use client'

import { useState, useEffect } from 'react'
import BaseModal from './BaseModal'
import { useTranslation } from '@/hooks/useTranslation'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
  joinDate?: string
  avatar?: string
}

interface EditUserModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (user: User) => void | Promise<void>
  user: User | null
  isLoading?: boolean
}

export default function EditUserModal({
  isOpen,
  onClose,
  onSave,
  user,
  isLoading = false,
}: EditUserModalProps) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<User>({
    id: 0,
    name: '',
    email: '',
    role: 'users',
    status: 'active',
  })

  useEffect(() => {
    if (user) {
      setFormData(user)
    }
  }, [user])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (user) {
      onSave(formData)
    }
  }

  const handleClose = () => {
    if (user) {
      setFormData(user)
    }
    onClose()
  }

  if (!user) return null

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleClose}
      title={t('editUser')}
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('name')}
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('email')}
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('role')}
          </label>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="users">{t('users')}</option>
            <option value="admin">{t('admin')}</option>
            <option value="editor">{t('editor')}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('status')}
          </label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="active">{t('active')}</option>
            <option value="inactive">{t('inactive')}</option>
          </select>
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
                <span>{t('save')}...</span>
              </>
            ) : (
              <span>{t('save')}</span>
            )}
          </button>
        </div>
      </form>
    </BaseModal>
  )
}
