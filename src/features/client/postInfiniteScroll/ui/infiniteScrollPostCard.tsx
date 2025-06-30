'use client'
import { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from '@tanstack/react-query';

import { PostList } from "@shared-common/types";
import { PostCard } from "@entities/postCard";

import { getInfinitePostList } from "../model/getInfinitePostList";

const PAGE_SIZE = 6;
type InfiniteScrollPostCardType = {category : string;}
export default function InfiniteScrollPostCard({category}:InfiniteScrollPostCardType){
  const [renderPostList, setRenderPostList] = useState<PostList>([]);
  //인식이 되면 쿼리가 콜될 div 지정
  const observerRef = useRef<HTMLDivElement | null>(null);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey : ['postList', category],
    queryFn : ({pageParam=''})=> getInfinitePostList(category,PAGE_SIZE, pageParam ),
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.hasMore ? lastPage.nextCursor : undefined,
  });

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting && hasNextPage && !isFetchingNextPage){
        fetchNextPage();
      }
    }, { threshold: 0.5, root: null });

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  },[hasNextPage, isFetchingNextPage, fetchNextPage]);

  return(
    <div className="w-full h-full p-2 sm:p-[30px]">
      <div className="pb-[3rem] overflow-y-scroll overflow-x-hidden h-full flex flex-wrap justify-center gap-5 mx-auto">
      {data?.pages.map((page)=>(
        page.postList.map((item: any) => (
          <div className="post-card-wrapper" key={item.pageId}>
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
        ))
        ))}
        <div ref={observerRef} className="w-full text-center text-sm text-gray-400">
          {isFetchingNextPage ? '불러오는 중...' : '모든 데이터를 불러왔습니다.'}
          </div>
      </div>
    </div>
  )
}