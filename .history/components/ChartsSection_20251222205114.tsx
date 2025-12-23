'use client'

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { useTranslation } from '@/hooks/useTranslation'

export default function ChartsSection() {
  const { language } = useTranslation()
  
  const salesData = language === 'fa' 
    ? [
        { month: 'فروردین', sales: 4000, revenue: 2400 },
        { month: 'اردیبهشت', sales: 3000, revenue: 1398 },
        { month: 'خرداد', sales: 2000, revenue: 9800 },
        { month: 'تیر', sales: 2780, revenue: 3908 },
        { month: 'مرداد', sales: 1890, revenue: 4800 },
        { month: 'شهریور', sales: 2390, revenue: 3800 },
      ]
    : [
        { month: 'Jan', sales: 4000, revenue: 2400 },
        { month: 'Feb', sales: 3000, revenue: 1398 },
        { month: 'Mar', sales: 2000, revenue: 9800 },
        { month: 'Apr', sales: 2780, revenue: 3908 },
        { month: 'May', sales: 1890, revenue: 4800 },
        { month: 'Jun', sales: 2390, revenue: 3800 },
      ]

  const userData = language === 'fa'
    ? [
        { day: 'شنبه', users: 400, active: 240 },
        { day: 'یکشنبه', users: 300, active: 139 },
        { day: 'دوشنبه', users: 200, active: 98 },
        { day: 'سه‌شنبه', users: 278, active: 390 },
        { day: 'چهارشنبه', users: 189, active: 480 },
        { day: 'پنج‌شنبه', users: 239, active: 380 },
      ]
    : [
        { day: 'Sat', users: 400, active: 240 },
        { day: 'Sun', users: 300, active: 139 },
        { day: 'Mon', users: 200, active: 98 },
        { day: 'Tue', users: 278, active: 390 },
        { day: 'Wed', users: 189, active: 480 },
        { day: 'Thu', users: 239, active: 380 },
      ]
  
  const { t } = useTranslation()
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          {t('monthlySalesChart')}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={salesData}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#0ea5e9"
              fillOpacity={1}
              fill="url(#colorSales)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          {t('weeklyUserActivity')}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#0ea5e9" />
            <Bar dataKey="active" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

