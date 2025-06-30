'use client'

import { useEffect, useState } from "react";
import { getInfinitePostList } from "../model/getInfinitePostList";
import { PostList } from "@shared-common/types";

type InfiniteScrollPostCardType = {
  category : string;
}
const PAGE_SIZE = 6;
export default function InfiniteScrollPostCard({category}:InfiniteScrollPostCardType){
  const [postList, setPostList] = useState<PostList>([]);

  useEffect(()=>{
    const fetctPlstList = async ()=>{
      const res = await getInfinitePostList(category,PAGE_SIZE,undefined);
      console.log(JSON.stringify(res));
    }
  });
  return(
    <div>hi</div>
  )
}