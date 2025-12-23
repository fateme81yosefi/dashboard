'use client'

import { Icon as IconifyIcon } from '@iconify/react'
import { cn } from '@/lib/utils'

interface IconProps {
  icon: string
  className?: string
  width?: string | number
  height?: string | number
}

export default function Icon({ icon, className, width, height }: IconProps) {
  return (
    <IconifyIcon
      icon={icon}
      className={cn(className)}
      width={width}
      height={height}
    />
  )
}

