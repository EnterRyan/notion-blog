'use client'

import { createContext, useContext, ReactNode } from 'react'
import useDarkModeHook from './hooks/useDarkModeHook'

type DarkModeContextType = {
  isDarkMode: boolean
  toggle: () => void
}

const DarkModeContext = createContext<DarkModeContextType | null>(null)

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode, toggleDarkMode } = useDarkModeHook()

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggle: toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) throw new Error('useDarkMode must be used within DarkModeProvider')
  return context
}
