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
  ChevronLeft,
  ChevronRight,
  User,
} from 'lucide-react'
import { cn, formatNumber } from '@/lib/utils'
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

interface SidebarProps {
  isOpen: boolean
  isCollapsed: boolean
  onClose: () => void
  onToggle: () => void
}

export default function Sidebar({ isOpen, isCollapsed, onClose, onToggle }: SidebarProps) {
  const pathname = usePathname()
  const { t, language } = useTranslation()
  const isRTL = language === 'fa'

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          'fixed lg:static right-0 top-0 z-50 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-all duration-300 ease-in-out border-l border-gray-200 dark:border-gray-700',
          isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0',
          isCollapsed ? 'w-20' : 'w-64'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={cn(
            'flex items-center border-b border-gray-200 dark:border-gray-700 transition-all duration-300',
            isCollapsed ? 'justify-center p-4' : 'justify-between p-6'
          )}>
            {!isCollapsed && (
              <div className="flex items-center space-x-3 space-x-reverse flex-1">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-lg">
                  <LayoutDashboard className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                    {t('dashboard')}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t('version')} {formatNumber('1.0', language)}
                  </p>
                </div>
              </div>
            )}
            {isCollapsed && (
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-lg">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
            )}
            
            {/* Toggle Button - Desktop */}
            <button
              onClick={onToggle}
              className={cn(
                'hidden lg:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-all duration-200',
                isCollapsed && 'absolute bottom-4 left-1/2 transform -translate-x-1/2'
              )}
              title={isCollapsed ? 'باز کردن' : 'بستن'}
            >
              {isCollapsed ? (
                isRTL ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />
              ) : (
                isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />
              )}
            </button>

            {/* Close Button - Mobile */}
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className={cn(
            'flex-1 overflow-y-auto transition-all duration-300',
            isCollapsed ? 'p-2' : 'p-4'
          )}>
            <div className={cn('space-y-2', isCollapsed && 'space-y-1')}>
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      // Close mobile sidebar on navigation
                      if (window.innerWidth < 1024) {
                        onClose()
                      }
                    }}
                    className={cn(
                      'flex items-center rounded-lg transition-all duration-200 group relative',
                      isCollapsed ? 'justify-center px-3 py-3' : 'px-4 py-3',
                      isActive
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 shadow-sm'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    )}
                    title={isCollapsed ? t(item.labelKey) : undefined}
                  >
                    <Icon className={cn(
                      'transition-transform duration-200',
                      isCollapsed ? 'w-5 h-5' : 'w-5 h-5 mx-3',
                      isActive && 'scale-110'
                    )} />
                    {!isCollapsed && (
                      <span className={cn(
                        'font-medium transition-all duration-200',
                        isActive && 'font-semibold'
                      )}>
                        {t(item.labelKey)}
                      </span>
                    )}
                    {/* Tooltip for collapsed state */}
                    {isCollapsed && (
                      <div className={cn(
                        'absolute px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg',
                        isRTL ? 'left-full ml-2' : 'right-full mr-2'
                      )}>
                        {t(item.labelKey)}
                        <div className={cn(
                          'absolute top-1/2 transform -translate-y-1/2 border-4 border-transparent',
                          isRTL 
                            ? 'left-0 translate-x-[-100%] border-l-gray-900 dark:border-l-gray-700'
                            : 'right-0 translate-x-full border-r-gray-900 dark:border-r-gray-700'
                        )}></div>
                      </div>
                    )}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Footer - Only show when not collapsed */}
          {!isCollapsed && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {t('systemAdmin')}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    admin@example.com
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}

