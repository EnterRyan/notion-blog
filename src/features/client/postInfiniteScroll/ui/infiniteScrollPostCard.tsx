'use client'
import { useEffect, useState } from "react";
import { getInfinitePostList } from "../model/getInfinitePostList";
import { PostList } from "@shared-common/types";
import { PostCard } from "@entities/postCard";

type InfiniteScrollPostCardType = {
  category : string;
}
const PAGE_SIZE = 6;
export default function InfiniteScrollPostCard({category}:InfiniteScrollPostCardType){
  const [renderPostList, setRenderPostList] = useState<PostList>([]);

  useEffect(()=>{
    const fetchPostList= async ()=>{
      const {postList,nextCursor, hasMore} = await getInfinitePostList(category,PAGE_SIZE,"");
      setRenderPostList(postList);
    }
    fetchPostList();
  },[]);
  return(
    <div className="w-full h-full p-2 sm:p-[30px]">
      <div className="pb-[3rem] overflow-y-scroll overflow-x-hidden h-full flex flex-wrap justify-center gap-5 mx-auto">
      {renderPostList.map((item)=>(
        <div className="post-card-wrapper">
          <PostCard 
            key={item.pageId}
            pageId={item.pageId}
            createDate={item.createDate}
            group={item.group}
            state={item.state}
            tags={item.tags}
            title={item.title}
            thumbnail={item.thumbnail}
          />
        </div>
        ))}
        <div className="w-full">옵저버 div에용</div>
      </div>
    </div>
  )
}