import { PostList } from "@shared-common/types";

export default function accumulateTag(totalResult:PostList){
  const tagCount = totalResult.reduce((acc,current)=>{
    current.tags.forEach((item)=>{
      const tmepTag = tagNameReducing(item);
      acc[tmepTag] = (acc[tmepTag]||0)+1;
    })
    return acc;
  },{} as Record<string, number>);

  const sortedTagCount = Object.entries(tagCount)
  .sort((a, b) => a[0].length - b[0].length)
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {} as Record<string, number>);

  return sortedTagCount;
}

function tagNameReducing(target:string){
  switch(target){
    case 'Front-end':
      return'FE';
    case 'JavaScript':
      return 'JS'
    case 'TypeScript':
      return 'TS'
    default:
      return target;
  }
}