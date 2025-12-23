'use client'

import {
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
import { formatNumberWithSeparator } from '@/lib/utils'

export default function ChartsSection() {
  const { language, t } = useTranslation()
  
  const salesData = language === 'fa' 
    ? [
        { month: 'فروردین', sales: 4200, revenue: 2800, target: 4000 },
        { month: 'اردیبهشت', sales: 3800, revenue: 3200, target: 4000 },
        { month: 'خرداد', sales: 5100, revenue: 4100, target: 4500 },
        { month: 'تیر', sales: 4800, revenue: 3900, target: 4500 },
        { month: 'مرداد', sales: 5500, revenue: 4500, target: 5000 },
        { month: 'شهریور', sales: 6200, revenue: 5200, target: 5500 },
      ]
    : [
        { month: 'Jan', sales: 4200, revenue: 2800, target: 4000 },
        { month: 'Feb', sales: 3800, revenue: 3200, target: 4000 },
        { month: 'Mar', sales: 5100, revenue: 4100, target: 4500 },
        { month: 'Apr', sales: 4800, revenue: 3900, target: 4500 },
        { month: 'May', sales: 5500, revenue: 4500, target: 5000 },
        { month: 'Jun', sales: 6200, revenue: 5200, target: 5500 },
      ]
  
  // Calculate statistics
  const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0)
  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0)
  const avgSales = Math.round(totalSales / salesData.length)
  const growthRate = ((salesData[salesData.length - 1].sales - salesData[0].sales) / salesData[0].sales * 100).toFixed(1)
  
  // Custom Tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            {payload[0].payload.month}
          </p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between space-x-4 space-x-reverse mb-1">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: entry.color }}
                ></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {entry.name === 'sales' ? (language === 'fa' ? 'فروش' : 'Sales') : 
                   entry.name === 'revenue' ? (language === 'fa' ? 'درآمد' : 'Revenue') : entry.name}
                </span>
              </div>
              <span className="text-xs font-semibold text-gray-900 dark:text-white">
                {formatNumberWithSeparator(entry.value, language)}
              </span>
            </div>
          ))}
        </div>
      )
    }
    return null
  }

  const userData = language === 'fa'
    ? [
        { day: 'شنبه', users: 420, active: 280, new: 45 },
        { day: 'یکشنبه', users: 380, active: 250, new: 38 },
        { day: 'دوشنبه', users: 450, active: 320, new: 52 },
        { day: 'سه‌شنبه', users: 520, active: 390, new: 48 },
        { day: 'چهارشنبه', users: 480, active: 360, new: 55 },
        { day: 'پنج‌شنبه', users: 550, active: 420, new: 62 },
        { day: 'جمعه', users: 490, active: 380, new: 58 },
      ]
    : [
        { day: 'Sat', users: 420, active: 280, new: 45 },
        { day: 'Sun', users: 380, active: 250, new: 38 },
        { day: 'Mon', users: 450, active: 320, new: 52 },
        { day: 'Tue', users: 520, active: 390, new: 48 },
        { day: 'Wed', users: 480, active: 360, new: 55 },
        { day: 'Thu', users: 550, active: 420, new: 62 },
        { day: 'Fri', users: 490, active: 380, new: 58 },
      ]
  
  // Custom Tooltip for User Chart
  const CustomUserTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            {payload[0].payload.day}
          </p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between space-x-4 space-x-reverse mb-1">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: entry.color }}
                ></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {entry.name === 'users' ? (language === 'fa' ? 'کاربران' : 'Users') : 
                   entry.name === 'active' ? (language === 'fa' ? 'فعال' : 'Active') : entry.name}
                </span>
              </div>
              <span className="text-xs font-semibold text-gray-900 dark:text-white">
                {formatNumberWithSeparator(entry.value, language)}
              </span>
            </div>
          ))}
        </div>
      )
    }
    return null
  }
  
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {t('monthlySalesChart')}
          </h3>
          <div className="flex items-center space-x-4 space-x-reverse mt-3">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {language === 'fa' ? 'فروش' : 'Sales'}
              </span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {language === 'fa' ? 'درآمد' : 'Revenue'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={salesData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#e5e7eb" 
              className="dark:stroke-gray-700"
              vertical={false}
            />
            <XAxis 
              dataKey="month" 
              stroke="#9ca3af"
              tick={{ fill: '#6b7280', fontSize: 11 }}
              axisLine={false}
            />
            <YAxis 
              stroke="#9ca3af"
              tick={{ fill: '#6b7280', fontSize: 11 }}
              axisLine={false}
              tickFormatter={(value) => formatNumberWithSeparator(value, language)}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '15px', fontSize: '12px' }}
              iconType="circle"
              iconSize={8}
              formatter={(value) => value === 'sales' ? (language === 'fa' ? 'فروش' : 'Sales') : 
                                     value === 'revenue' ? (language === 'fa' ? 'درآمد' : 'Revenue') : value}
            />
            <Area
              type="monotone"
              dataKey="sales"
              name="sales"
              stroke="#0ea5e9"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorSales)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              name="revenue"
              stroke="#10b981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {t('weeklyUserActivity')}
          </h3>
          <div className="flex items-center space-x-4 space-x-reverse mt-3">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {language === 'fa' ? 'کاربران' : 'Users'}
              </span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {language === 'fa' ? 'فعال' : 'Active'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#e5e7eb" 
              className="dark:stroke-gray-700"
              vertical={false}
            />
            <XAxis 
              dataKey="day" 
              stroke="#9ca3af"
              tick={{ fill: '#6b7280', fontSize: 11 }}
              axisLine={false}
            />
            <YAxis 
              stroke="#9ca3af"
              tick={{ fill: '#6b7280', fontSize: 11 }}
              axisLine={false}
              tickFormatter={(value) => formatNumberWithSeparator(value, language)}
            />
            <Tooltip content={<CustomUserTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '15px', fontSize: '12px' }}
              iconType="circle"
              iconSize={8}
              formatter={(value) => value === 'users' ? (language === 'fa' ? 'کاربران' : 'Users') : 
                                     value === 'active' ? (language === 'fa' ? 'فعال' : 'Active') : value}
            />
            <Bar 
              dataKey="users" 
              name="users"
              fill="url(#colorUsers)"
              radius={[6, 6, 0, 0]}
            />
            <Bar 
              dataKey="active" 
              name="active"
              fill="url(#colorActive)"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

