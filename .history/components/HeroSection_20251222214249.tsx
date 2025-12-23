'use client'

import { Sparkles, TrendingUp, Zap } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { formatNumber } from '@/lib/utils'

export default function HeroSection() {
  const { t, language } = useTranslation()
  
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-primary-500 to-purple-600 p-8 md:p-12 shadow-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10">
        <div className="flex items-center space-x-3 space-x-reverse mb-4">
          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-white/90 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
            {t('welcomeBack')}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          {t('dashboard')}
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl mb-6 max-w-2xl">
          {t('dashboardDescription') || 'مدیریت و نظارت کامل بر سیستم خود را در یک مکان داشته باشید'}
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <TrendingUp className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">
              {formatNumber('+12.5%', language)} {language === 'fa' ? 'رشد' : 'Growth'}
            </span>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Zap className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">
              {language === 'fa' ? 'عملکرد عالی' : 'Excellent Performance'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
