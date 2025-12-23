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
      <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 md:p-8 transition-all duration-500 overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {t('monthlySalesChart')}
            </h3>
     
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        {/* Chart */}
        <div className="relative z-10">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
              <XAxis 
                dataKey="month" 
                stroke="#6b7280"
                className="dark:stroke-gray-400"
                tick={{ fill: '#6b7280' }}
              />
              <YAxis 
                stroke="#6b7280"
                className="dark:stroke-gray-400"
                tick={{ fill: '#6b7280' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#0ea5e9"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorSales)"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 md:p-8 transition-all duration-500 overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {t('weeklyUserActivity')}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              فعالیت هفتگی کاربران
            </p>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        {/* Chart */}
        <div className="relative z-10">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
              <XAxis 
                dataKey="day" 
                stroke="#6b7280"
                className="dark:stroke-gray-400"
                tick={{ fill: '#6b7280' }}
              />
              <YAxis 
                stroke="#6b7280"
                className="dark:stroke-gray-400"
                tick={{ fill: '#6b7280' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
              />
              <Legend />
              <Bar 
                dataKey="users" 
                fill="#0ea5e9" 
                radius={[8, 8, 0, 0]}
              />
              <Bar 
                dataKey="active" 
                fill="#10b981" 
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

