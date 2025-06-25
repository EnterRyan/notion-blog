const categoryColorMap: {[key: string]: string} = {
  '기술 블로깅': 'bg-blue-500',
  '교육/학습': 'bg-purple-500',
  '잡담': 'bg-green-500',
}

const tagColorMap: {[key: string]: string} = {
  // 기술 블로깅 관련 태그
  react: 'bg-sky-400 hover:bg-sky-500',
  javascript: 'bg-yellow-400 hover:bg-yellow-500',
  js:'bg-yellow-400 hover:bg-yellow-500',
  typescript: 'bg-blue-600 hover:bg-blue-700',
  ts: 'bg-blue-600 hover:bg-blue-700',
  next: 'bg-black hover:bg-gray-800 text-white',
  tailwindcss: 'bg-sky-500 hover:bg-sky-600',
  html5: 'bg-orange-500 hover:bg-orange-600',
  css3: 'bg-blue-500 hover:bg-blue-600',
  frontend: 'bg-green-500 hover:bg-green-600',
  fe: 'bg-green-500 hover:bg-green-600',
  
  // 교육/학습 관련 태그
  강의: 'bg-purple-400 hover:bg-purple-500',
  'ui/ux': 'bg-pink-400 hover:bg-pink-500',
  '코테': 'bg-red-400 hover:bg-red-500',
  학습: 'bg-indigo-400 hover:bg-indigo-500',
  
  // 잡담 관련 태그
  회고: 'bg-emerald-400 hover:bg-emerald-500',
  독서: 'bg-amber-400 hover:bg-amber-500',
  일상: 'bg-lime-400 hover:bg-lime-500',
  
  // 공통 태그
  notionapi: 'bg-sky-500 hover:bg-sky-600',
  fsd: 'bg-amber-700 hover:bg-amber-800',
}

type TagType = {
  tag: string;
  isCategory?: boolean;
}

export default function Tag({tag, isCategory = false}: TagType) {
  const normalizedTag = tag.toLowerCase().replace(/[\s-]/g, "");
  const colorMap = isCategory ? categoryColorMap : tagColorMap;
  const bgClass = colorMap[normalizedTag] ?? "bg-gray-200 hover:bg-gray-300";
  
  return (
    <span 
    className={`${bgClass} 
    rounded-[5px] px-2 py-0.5 text-sm 
    transition-colors duration-200`}>
      {tag}
    </span>
  )
}