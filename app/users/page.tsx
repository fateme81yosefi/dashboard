'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import UsersTable from '@/components/UsersTable'
import CreateUserModal from '@/components/modals/CreateUserModal'
import { useTranslation } from '@/hooks/useTranslation'

export default function UsersPage() {
  const { t } = useTranslation()
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateUser = async (userData: {
    name: string
    email: string
    password: string
    role: string
    status: string
  }) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsLoading(false)
    setCreateModalOpen(false)
    // In a real app, you would update the users list here
  }
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('userManagement')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {t('userList')}
            </p>
          </div>
          <button 
            onClick={() => setCreateModalOpen(true)}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            {t('addNewUser')}
          </button>
        </div>

        <UsersTable />

        <CreateUserModal
          isOpen={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onCreate={handleCreateUser}
          isLoading={isLoading}
        />
      </div>
    </DashboardLayout>
  )
}

