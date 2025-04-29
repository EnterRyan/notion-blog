import Link from "next/link";
import Image from 'next/image';
import { Post } from "@entities-server/post/type/postListType";
import { Tag } from "src/shared/ui";

export default function PostCard({title,group,createDate,pageId,tags, thumbnail}:Post){
  if (!pageId) {
    console.warn('⚠️ PostCard에 pageId가 없습니다:', title);
  }
  return (
    <Link href={`/post/${pageId}`} >
      <div className="">
        <div className="relative w-[400px] h-[200px]">
          <Image src={thumbnail} alt="썸네일" fill className="rounded-lg object-cover"/>
        </div>
        <div className="flex flex-col">
          <p className="font-post-title">{title}</p>
          <p>{group}</p>
          <div className="flex flex-row gap-1">
            {tags.map((item,index)=>(
              <Tag tag={item} key={`${item}${index}`}/>
            ))}
          </div>
          <p>{createDate}</p>
        </div>
      </div>
    </Link>
  )
}