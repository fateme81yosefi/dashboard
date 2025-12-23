'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'
import CreateEventModal from '@/components/modals/CreateEventModal'
import DeleteModal from '@/components/modals/DeleteModal'
import { useTranslation } from '@/hooks/useTranslation'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
}

export default function CalendarPage() {
  const { t } = useTranslation()
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [events, setEvents] = useState<Event[]>([])

  const handleCreateEvent = async (eventData: {
    title: string
    description: string
    date: string
    time: string
  }) => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    const newEvent: Event = {
      id: Date.now(),
      ...eventData,
    }
    setEvents([...events, newEvent])
    setIsLoading(false)
    setCreateModalOpen(false)
  }

  const handleDelete = (event: Event) => {
    setSelectedEvent(event)
    setDeleteModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!selectedEvent) return
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setEvents(events.filter(e => e.id !== selectedEvent.id))
    setIsLoading(false)
    setDeleteModalOpen(false)
    setSelectedEvent(null)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('calendar')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              مدیریت رویدادها و قرارهای ملاقات
            </p>
          </div>
          <button 
            onClick={() => setCreateModalOpen(true)}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 space-x-reverse"
          >
            <Plus className="w-5 h-5" />
            <span>{t('createEvent')}</span>
          </button>
        </div>

        {events.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <p className="text-center text-gray-500 dark:text-gray-400 py-12">
              هیچ رویدادی وجود ندارد. برای ایجاد رویداد جدید روی دکمه بالا کلیک کنید.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {event.description}
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <p>{event.date}</p>
                      <p>{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <button
                      onClick={() => handleDelete(event)}
                      className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      title={t('delete')}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <CreateEventModal
          isOpen={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onCreate={handleCreateEvent}
          isLoading={isLoading}
        />

        <DeleteModal
          isOpen={deleteModalOpen}
          onClose={() => {
            setDeleteModalOpen(false)
            setSelectedEvent(null)
          }}
          onConfirm={handleConfirmDelete}
          title={t('deleteEvent')}
          itemName={selectedEvent?.title}
          isLoading={isLoading}
        />
      </div>
    </DashboardLayout>
  )
}

