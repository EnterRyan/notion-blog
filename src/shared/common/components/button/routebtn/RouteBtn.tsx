"use client"
import { StepBack } from "lucide-react";
import { useRouter } from "next/navigation"

export function BackRouteBtn(){
  const router = useRouter();
  return (
    <button
          className="flex items-center gap-1 px-3 py-2 rounded 
          bg-gray-200 dark:bg-gray-700 
          text-gray-800 dark:text-white font-medium 
          hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          onClick={() => {router.back()}}
        >
      <StepBack size={20} />
      <span>이전으로</span>
    </button>    
  )
}

type RouteBtnType ={category:string, route:string}
export function RouteBtn({category,route} :RouteBtnType){
  const router = useRouter();
  return (
    <button
      key={category}
      className="px-4 py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white font-semibold hover:bg-blue-500 hover:text-white transition shadow-sm"
      onClick={() => {router.push(`/posting/${route}`)}}
    >
      {category}
    </button>
  )
}