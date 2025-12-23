import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert numbers to Persian or English based on language
const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export function formatNumber(num: string | number, language: 'fa' | 'en' = 'fa'): string {
  const numStr = num.toString()
  
  if (language === 'fa') {
    // Convert English digits to Persian (keep other characters like +, %, .)
    return numStr.replace(/\d/g, (digit) => persianDigits[parseInt(digit)])
  } else {
    // Convert Persian digits to English (keep other characters)
    return numStr.split('').map(char => {
      const index = persianDigits.indexOf(char)
      return index !== -1 ? englishDigits[index] : char
    }).join('')
  }
}

// Format number with thousand separators
export function formatNumberWithSeparator(num: string | number, language: 'fa' | 'en' = 'fa'): string {
  const numValue = typeof num === 'string' ? parseFloat(num.replace(/[^\d.]/g, '')) : num
  const formatted = numValue.toLocaleString('en-US')
  return formatNumber(formatted, language)
}

