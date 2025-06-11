import { PostCard } from "src/entities/postCard";
import { GetPostList } from "../model/GetPostList";

export default async function PostListFetcher(){
  const result = await GetPostList();

  return (
    <div className="w-full h-full p-[30px]">
      <div className="overflow-y-scroll overflow-x-hidden h-full grid gap-5 justify-center grid-cols-[repeat(auto-fit,minmax(400px,400px))]">
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
    </div>
  )
}