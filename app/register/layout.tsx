'use client'

import type { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { GoogleProvider } from '@/components/providers/google-provider'

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return (
    <GoogleProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
        {children}
      </ThemeProvider>
    </GoogleProvider>
  )
}
