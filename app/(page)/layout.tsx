import { StepBack } from "lucide-react";

const categories = [
  "기술 포스팅",
  "프로젝트 포스팅",
  "교육 & 일반 포스팅"
];

export default function postLayout({children}: Readonly<{children: React.ReactNode;}>){
  return (
    <div className="w-[100%] min-h-screen h-[100%] flex flex-col items-center bg-gray-50 dark:bg-gray-900 pt-3 pl-3 pr-3">
      <div className="w-[100%] flex flex-row items-center justify-between">
        <button
          className="flex items-center gap-1 px-3 py-2 rounded 
          bg-gray-200 dark:bg-gray-700 
          text-gray-800 dark:text-white font-medium 
          hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          // onClick={() => {}}
        >
          <StepBack size={20} />
          <span>이전으로</span>
        </button>

        <div className="flex flex-row gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white font-semibold hover:bg-blue-500 hover:text-white transition shadow-sm"
              // onClick={() => {}}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[95%] w-[100%]">
        {children}
      </div>
    </div>
  )
}