'use client'
import { useDarkMode } from "@shared-client/providers/darkmode"
import { Github, User, Moon, Sun } from "lucide-react"
import { useRouter } from "next/navigation";

export default function Header() {
  const { isDarkMode, toggle } = useDarkMode();
  const router = useRouter();
  
  const handleOnClick = (path: string) => {
    router.push(path);
  }

  const handleExternalClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <header
    className="flex items-center justify-between h-16 px-6 
    bg-white dark:bg-gray-900 border-b 
    border-gray-200 dark:border-gray-700 
    shadow-sm"
    >
      {/* 로고/타이틀 */}
      <div className="flex items-center cursor-pointer" onClick={()=>handleOnClick('/')}>
        <h1 className="text-lg sm:text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 text-gray-900 dark:text-white tracking-tight">Changetodev&apos;s Blog</h1>
      </div>

      <nav className="flex items-center gap-2">
        {/* Introduce 버튼 */}
        <button 
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium 
        text-gray-700 dark:text-gray-300 
        hover:text-blue-600 dark:hover:text-blue-400 
        hover:bg-gray-50 dark:hover:bg-gray-800 
        rounded-lg transition-all duration-200"
        onClick={()=>handleExternalClick("https://kimtaehun-dev.github.io/tagDev/")}>
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">Introduce</span>
        </button>

        {/* GitHub 버튼 */}
        <button 
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium 
        text-gray-700 dark:text-gray-300 
        hover:text-gray-900 dark:hover:text-white 
        hover:bg-gray-50 dark:hover:bg-gray-800 
        rounded-lg transition-all duration-200"
        onClick={()=>handleExternalClick('https://github.com/kimtaehun-dev')}>
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">GitHub</span>
        </button>

        {/* 구분선 */}
        <div className="w-px h-6 bg-gray-200 dark:bg-gray-600 mx-1"></div>

        {/* 다크모드 토글 버튼 */}
        <button
          className="p-2 text-gray-700 dark:text-gray-300 
          hover:text-yellow-500 dark:hover:text-yellow-400 
          hover:bg-gray-50 dark:hover:bg-gray-800 
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
