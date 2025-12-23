'use client'

import { Search, MoreVertical, Edit, Trash2, Eye } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import EditUserModal from './modals/EditUserModal'
import DeleteModal from './modals/DeleteModal'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
  joinDate: string
  avatar: string
}

export default function UsersTable() {
  const { t, language } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const [users, setUsers] = useState<User[]>(
    language === 'fa' 
      ? [
          {
            id: 1,
            name: 'علی احمدی',
            email: 'ali.ahmadi@example.com',
            role: 'admin',
            status: 'active',
            joinDate: '۱۴۰۲/۰۱/۱۵',
            avatar: 'AA',
          },
          {
            id: 2,
            name: 'مریم رضایی',
            email: 'maryam.rezaei@example.com',
            role: 'users',
            status: 'active',
            joinDate: '۱۴۰۲/۰۲/۲۰',
            avatar: 'MR',
          },
          {
            id: 3,
            name: 'حسین محمدی',
            email: 'hossein.mohammadi@example.com',
            role: 'editor',
            status: 'inactive',
            joinDate: '۱۴۰۲/۰۳/۱۰',
            avatar: 'HM',
          },
          {
            id: 4,
            name: 'فاطمه کریمی',
            email: 'fateme.karimi@example.com',
            role: 'users',
            status: 'active',
            joinDate: '۱۴۰۲/۰۴/۰۵',
            avatar: 'FK',
          },
          {
            id: 5,
            name: 'محمد صادقی',
            email: 'mohammad.sadeghi@example.com',
            role: 'admin',
            status: 'active',
            joinDate: '۱۴۰۲/۰۵/۱۲',
            avatar: 'MS',
          },
        ]
      : [
          {
            id: 1,
            name: 'Ali Ahmadi',
            email: 'ali.ahmadi@example.com',
            role: 'admin',
            status: 'active',
            joinDate: '2023/04/05',
            avatar: 'AA',
          },
          {
            id: 2,
            name: 'Maryam Rezaei',
            email: 'maryam.rezaei@example.com',
            role: 'users',
            status: 'active',
            joinDate: '2023/05/10',
            avatar: 'MR',
          },
          {
            id: 3,
            name: 'Hossein Mohammadi',
            email: 'hossein.mohammadi@example.com',
            role: 'editor',
            status: 'inactive',
            joinDate: '2023/05/30',
            avatar: 'HM',
          },
          {
            id: 4,
            name: 'Fateme Karimi',
            email: 'fateme.karimi@example.com',
            role: 'users',
            status: 'active',
            joinDate: '2023/06/25',
            avatar: 'FK',
          },
          {
            id: 5,
            name: 'Mohammad Sadeghi',
            email: 'mohammad.sadeghi@example.com',
            role: 'admin',
            status: 'active',
            joinDate: '2023/08/02',
            avatar: 'MS',
          },
        ]
  )

  const handleEdit = (user: User) => {
    setSelectedUser(user)
    setEditModalOpen(true)
  }

  const handleDelete = (user: User) => {
    setSelectedUser(user)
    setDeleteModalOpen(true)
  }

  const handleSaveEdit = async (updatedUser: { id: number; name: string; email: string; role: string; status: string }) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    setUsers(users.map(u => {
      if (u.id === updatedUser.id) {
        return { ...u, ...updatedUser }
      }
      return u
    }))
    setIsLoading(false)
    setEditModalOpen(false)
    setSelectedUser(null)
  }

  const handleConfirmDelete = async () => {
    if (!selectedUser) return
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    setUsers(users.filter(u => u.id !== selectedUser.id))
    setIsLoading(false)
    setDeleteModalOpen(false)
    setSelectedUser(null)
  }

  const getRoleLabel = (role: string) => {
    if (role === 'admin') return t('admin')
    if (role === 'editor') return t('editor')
    return t('users')
  }

  const getStatusLabel = (status: string) => {
    return status === 'active' ? t('active') : t('inactive')
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    return status === t('active')
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  }

  const getRoleColor = (role: string) => {
    if (role === t('admin')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    if (role === t('editor')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            {t('userListTitle')} ({filteredUsers.length})
          </h2>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t('searchUser')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 pr-10 pl-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                {t('user')}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                {t('role')}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                {t('status')}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                {t('joinDate')}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                {t('actions')}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center m-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                      {user.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleColor(
                      getRoleLabel(user.role)
                    )}`}
                  >
                    {getRoleLabel(user.role)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      getStatusLabel(user.status)
                    )}`}
                  >
                    {getStatusLabel(user.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {user.joinDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <button className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleEdit(user)}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleDelete(user)}
                      className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {t('showing')} ۱ {t('to')} {filteredUsers.length} {t('of')} {filteredUsers.length} {t('results')}
        </div>
        <div className="flex space-x-2 space-x-reverse">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
            {t('previous')}
          </button>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700">
            ۱
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
            {t('next')}
          </button>
        </div>
      </div>

      <EditUserModal
        isOpen={editModalOpen}
        onClose={() => {
          setEditModalOpen(false)
          setSelectedUser(null)
        }}
        onSave={handleSaveEdit}
        user={selectedUser}
        isLoading={isLoading}
      />

      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false)
          setSelectedUser(null)
        }}
        onConfirm={handleConfirmDelete}
        title={t('deleteUser')}
        itemName={selectedUser?.name}
        isLoading={isLoading}
      />
    </div>
  )
}

