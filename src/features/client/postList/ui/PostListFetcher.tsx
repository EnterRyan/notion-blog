import { PostCard } from "@entities-client/postCard";
import { GetPostList } from "../model/GetPostList";

export default async function PostListFetcher(){
  const result = await GetPostList();

  return (
    <div className="flex flex-row gap-5 flex-wrap">
      {result.map((item,index)=>(
        <PostCard 
        key={`${item}${index}`}
        title={item.title} 
        group={item.group}
        createDate={item.createDate}
        pageId={item.pageId}
        state={item.state}
        tags={item.tags}
        thumbnail={item.thumbnail}
        />
      ))}
    </div>
  )
}