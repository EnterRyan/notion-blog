import Fuse from "fuse.js";
import { Post, PostList } from "@shared-common/types";
import { synonymMap } from "./dataMap/searchFuseMap";

export default function keywordSearch(PostList:PostList,keyword:string){
  const postsWithSynonyms = PostList.map(post => ({
    ...post,
    synonyms: generateSynonyms(post),
  }))

  const fuse = new Fuse(postsWithSynonyms,{
    keys: ['title', 'tags', 'synonyms'], // <-- 이 필드 추가
    includeScore: true,
    threshold: 0.3,
  })

  const result = fuse.search(keyword);
  const postList = result.map(r => r.item);
  console.log(postList);
  return postList;
}


function generateSynonyms(post: Post): string[] {
  const list: string[] = []

  for (const tag of post.tags) {
    const lowerTag = tag.toLowerCase()
    const mapped = synonymMap.get(lowerTag)
    if (mapped) list.push(mapped)
  }

  const titleWords = post.title.toLowerCase().split(/[\s\/-]+/)
  for (const word of titleWords) {
    const mapped = synonymMap.get(word)
    if (mapped) list.push(mapped)
  }

  return [...new Set(list)]
}