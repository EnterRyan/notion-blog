
const tagColorMap:{[key: string]: string} ={
  React: "bg-sky-200",
  JavaScript: "bg-yellow-200",
  TypeScript: "bg-blue-200",
  FSD: "bg-indigo-200",
  HTML5: "bg-orange-200",
  CSS3: "bg-blue-100",
  Next: "bg-gray-300",
  TailWind: "bg-teal-200",
}

type TagType = {tag : string;}
export default function Tag({tag}:TagType){
  return (
    <span className={`${tagColorMap[tag]} ?? bg-gray-100 p-1 rounded-[1]`}>
      {tag}
    </span>
  )
}