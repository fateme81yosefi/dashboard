'use client'

import React from 'react'
import Icon from './Icon'
import { useApp } from '@/contexts/AppContext'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  value: string
  onChange: (value: string) => void
  options: SelectOption[]
  label?: string
  className?: string
  disabled?: boolean
  required?: boolean
  placeholder?: string
}

export default function Select({
  value,
  onChange,
  options,
  label,
  className = '',
  disabled = false,
  required = false,
  placeholder,
}: SelectProps) {
  const { language } = useApp()
  const isRTL = language === 'fa'
  
  // Padding based on direction: RTL needs left padding, LTR needs right padding
  const paddingClass = isRTL ? 'pl-10 pr-4' : 'pr-10 pl-4'
  const baseClasses = `w-full py-2 ${paddingClass} border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors appearance-none cursor-pointer [&::-ms-expand]:hidden`
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`.trim()

  // Position icon based on direction
  const iconPositionClass = isRTL ? 'left-3' : 'right-3'

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 mr-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          required={required}
          className={combinedClasses}
          style={{
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
          }}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon 
          icon="lucide:chevron-down"
          className={`absolute ${iconPositionClass} top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none text-gray-400 dark:text-gray-500 z-10 ${disabled ? 'opacity-50' : ''}`}
        />
      </div>
    </div>
  )
}

