import React from "react";

const categories = [
  "전체",
  "JavaScript",
  "TypeScript",
  "Front-end"
];

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-2xl flex flex-row items-center justify-between py-4 px-2">
        {/* 여기에 각 카테고리로 이동할 탭을 만들고싶어 */}
        <div className="flex flex-row gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold hover:bg-blue-400 hover:text-white transition"
              // onClick={() => {}}
            >
              {category}
            </button>
          ))}
        </div>
        {/* 이전 라우터로 이동 */}
        <button
          className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-white font-medium hover:bg-gray-400 transition"
          // onClick={() => {}}
        >
          ← 이전으로 돌아가기
        </button>
      </div>
      <main className="w-full max-w-2xl flex-1 px-2">{children}</main>
    </div>
  );
} 