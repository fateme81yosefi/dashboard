'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  FileText,
  Bell,
  Calendar,
  TrendingUp,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/hooks/useTranslation'

const menuItems = [
  { icon: LayoutDashboard, labelKey: 'dashboard' as const, href: '/' },
  { icon: Users, labelKey: 'users' as const, href: '/users' },
  { icon: BarChart3, labelKey: 'reports' as const, href: '/reports' },
  { icon: FileText, labelKey: 'docs' as const, href: '/docs' },
  { icon: Calendar, labelKey: 'calendar' as const, href: '/calendar' },
  { icon: TrendingUp, labelKey: 'analytics' as const, href: '/analytics' },
  { icon: Bell, labelKey: 'notifications' as const, href: '/notifications' },
  { icon: Settings, labelKey: 'settings' as const, href: '/settings' },
]

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname()
  const { t } = useTranslation()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          'fixed lg:static right-0 top-0 z-50 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-all duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10  mx-3 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t('dashboard')}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t('version')} ۱.۰
                </p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center px-4 py-3 rounded-lg transition-colors',
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  )}
                >
                  <Icon className="w-5 h-5 mx-3" />
                  <span className="font-medium">{t(item.labelKey)}</span>
                </Link>
              )
            })}
          </nav>

     
        </div>
      </aside>
    </>
  )
}

