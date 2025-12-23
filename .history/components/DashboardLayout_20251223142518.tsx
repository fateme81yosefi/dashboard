'use client'

import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Load sidebar collapsed state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('sidebarCollapsed')
    if (savedState !== null) {
      setSidebarCollapsed(savedState === 'true')
    }
  }, [])

  // Save sidebar collapsed state to localStorage
  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', String(sidebarCollapsed))
  }, [sidebarCollapsed])

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-300">
      <Sidebar 
        isOpen={sidebarOpen} 
        isCollapsed={sidebarCollapsed}
        onClose={() => setSidebarOpen(false)}
        onToggle={toggleSidebar}
      />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 p-6 md:p-8 transition-colors duration-300">
          {children}
        </main>
      </div>
    </div>
  )
}

