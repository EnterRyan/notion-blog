'use client'
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SearchForm() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const handleSearchEvent = (event:FormEvent<HTMLFormElement> )=>{
    event.preventDefault();
    const trimmed = value.trim()
    if (!trimmed) return

    router.push(`/post/search/${encodeURIComponent(trimmed)}`)

  }
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xs">
        <form
          role="search"
          className="w-full"
          onSubmit={e =>handleSearchEvent(e) }
        >
          <label htmlFor="search-input" className="block text-sm font-medium text-gray-700 dark:text-gray-200">키워드로 검색해보세요.</label>
          <div className="relative w-full">
            {/* 돋보기 아이콘 (왼쪽) */}
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            {/* 인풋 */}
            <input
              id="search-input"
              type="text"
              placeholder="검색어를 입력하세요"
              value={value}
              onChange={e => setValue(e.target.value)}
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
            />
            {/* X 버튼 (오른쪽) */}
            {value && (
              <button
                type="button"
                aria-label="검색어 지우기"
                onClick={() => setValue('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                style={{ outline: 'none' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}