import Link from "next/link";
import Image from 'next/image';

import { Post } from "@shared-common/types";
import { Tag } from "@shared-common/components/tag";

export default function PostCard({title,group,createDate,pageId,tags, thumbnail}:Post){
  return (
    <Link href={`/post/${pageId}`} >
      <div className="bg-white max-w-[400px] rounded-lg">
        <div className="relative w-[400px] h-[200px]">
          <Image src={thumbnail} alt="썸네일" fill className="rounded-lg object-cover"/>
        </div>
        <div className="flex flex-col">
          <p className="font-post-title">{title}</p>
          <div className="flex flex-row gap-1">
            {tags.map((item,index)=>(
              <Tag tag={item} key={`${item}${index}`}/>
            ))}
          </div>
          <div className="flex justify-between">
            <p>{group}</p>
            <p>{createDate}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}