
const tagColorMap:{[key: string]: string} ={
  react: "bg-sky-400",
  javascript: "bg-yellow-400",
  typescript: "bg-blue-600",
  fsd: "bg-amber-700",
  html5: "bg-red-500",
  css3: "bg-blue-500",
  next: "bg-gray-300",
  tailwindcss: "bg-sky-500",
  notionapi: "bg-gray-300",
  frontend: "bg-green-500",
}

type TagType = {tag : string;}
export default function Tag({tag}:TagType){
  const normalizedTag = tag.toLowerCase().replace(/[\s-]/g, ""); 
  const bgClass = tagColorMap[normalizedTag] ?? "bg-gray-100"; 
  return (
    <span className={`${bgClass} rounded-[5px] pl-1.5 pr-1.5`}>
      {tag}
    </span>
  )
}