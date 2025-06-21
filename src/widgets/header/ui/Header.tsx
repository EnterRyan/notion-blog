'use client'
import { useDarkMode } from "@shared-client/providers/darkmode"
import { Github, User, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react";

export default function Header() {
  const { isDarkMode, toggle } = useDarkMode();
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // ✅ 마운트 전에는 렌더링하지 않음
  if (!isMounted) return null

  return (
    <header
    className="flex items-center justify-between h-16 px-6 
    bg-white-300 dark:bg-gray-900 border-b 
    border-gray-200 dark:border-gray-700 
    shadow-sm"
    >
      {/* 로고/타이틀 */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Changetodev&apos;s Blog</h1>
      </div>

      {/* 네비게이션 버튼들 */}
      <nav className="flex items-center gap-2">
        {/* Introduce 버튼 */}
        <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200">
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">Introduce</span>
        </button>

        {/* GitHub 버튼 */}
        <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200">
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </button>

        {/* 구분선 */}
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"></div>

        {/* 다크모드 토글 버튼 */}
        <button
          className="p-2 text-gray-700 dark:text-gray-300 
          hover:text-yellow-500 dark:hover:text-yellow-400 
          hover:bg-gray-100 dark:hover:bg-gray-800 
          rounded-lg transition-all duration-200"
          aria-label="테마 변경"
          onClick={toggle}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>
    </header>
  )
}
