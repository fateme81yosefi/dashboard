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
  ReferenceLine,
} from 'recharts'
import { TrendingUp, DollarSign, ShoppingBag, Sparkles } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { formatNumber, formatNumberWithSeparator } from '@/lib/utils'

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
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <p className="font-bold text-gray-900 dark:text-white mb-2">
            {payload[0].payload.month}
          </p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center space-x-2 space-x-reverse mb-1">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {entry.name === 'sales' ? (language === 'fa' ? 'فروش' : 'Sales') : 
                 entry.name === 'revenue' ? (language === 'fa' ? 'درآمد' : 'Revenue') : entry.name}:
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
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
  
  return (
    <div className="space-y-6">
      <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 md:p-8 transition-all duration-500 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-emerald-50/20 dark:from-blue-900/10 dark:via-cyan-900/5 dark:to-emerald-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-transparent rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-200/20 to-transparent rounded-tr-full blur-3xl"></div>
        
        {/* Header */}
        <div className="relative z-10 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="p-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {t('monthlySalesChart')}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {language === 'fa' ? 'تحلیل عملکرد فروش و درآمد ماهانه' : 'Monthly sales and revenue analysis'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="flex items-center space-x-1.5 space-x-reverse px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                  {language === 'fa' ? 'فروش' : 'Sales'}
                </span>
              </div>
              <div className="flex items-center space-x-1.5 space-x-reverse px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                  {language === 'fa' ? 'درآمد' : 'Revenue'}
                </span>
              </div>
            </div>
          </div>
          
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 rounded-xl p-4 border border-blue-200/50 dark:border-blue-800/50">
              <div className="flex items-center space-x-2 space-x-reverse mb-2">
                <DollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
                  {language === 'fa' ? 'کل فروش' : 'Total Sales'}
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {formatNumberWithSeparator(totalSales, language)}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 rounded-xl p-4 border border-green-200/50 dark:border-green-800/50">
              <div className="flex items-center space-x-2 space-x-reverse mb-2">
                <ShoppingBag className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-xs font-medium text-green-700 dark:text-green-400">
                  {language === 'fa' ? 'کل درآمد' : 'Total Revenue'}
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {formatNumberWithSeparator(totalRevenue, language)}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/10 rounded-xl p-4 border border-purple-200/50 dark:border-purple-800/50">
              <div className="flex items-center space-x-2 space-x-reverse mb-2">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-medium text-purple-700 dark:text-purple-400">
                  {language === 'fa' ? 'میانگین' : 'Average'}
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {formatNumberWithSeparator(avgSales, language)}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/10 rounded-xl p-4 border border-orange-200/50 dark:border-orange-800/50">
              <div className="flex items-center space-x-2 space-x-reverse mb-2">
                <TrendingUp className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-xs font-medium text-orange-700 dark:text-orange-400">
                  {language === 'fa' ? 'رشد' : 'Growth'}
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {formatNumber(growthRate, language)}%
              </p>
            </div>
          </div>
        </div>
        
        {/* Chart */}
        <div className="relative z-10">
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={salesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.9} />
                  <stop offset="50%" stopColor="#0ea5e9" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.9} />
                  <stop offset="50%" stopColor="#10b981" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.05} />
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
                stroke="#6b7280"
                className="dark:stroke-gray-400"
                tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis 
                stroke="#6b7280"
                className="dark:stroke-gray-400"
                tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
                axisLine={{ stroke: '#e5e7eb' }}
                tickFormatter={(value) => formatNumberWithSeparator(value, language)}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
                formatter={(value) => value === 'sales' ? (language === 'fa' ? 'فروش' : 'Sales') : 
                                       value === 'revenue' ? (language === 'fa' ? 'درآمد' : 'Revenue') : value}
              />
              <Area
                type="monotone"
                dataKey="sales"
                name="sales"
                stroke="#0ea5e9"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorSales)"
                dot={{ fill: '#0ea5e9', strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, stroke: '#0ea5e9', strokeWidth: 2 }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                name="revenue"
                stroke="#10b981"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorRevenue)"
                dot={{ fill: '#10b981', strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, stroke: '#10b981', strokeWidth: 2 }}
              />
              <ReferenceLine 
                y={avgSales} 
                stroke="#8b5cf6" 
                strokeDasharray="5 5" 
                strokeWidth={2}
                label={{ value: language === 'fa' ? 'میانگین' : 'Average', position: 'right', fill: '#8b5cf6' }}
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

