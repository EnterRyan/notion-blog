import Link from "next/link";
import Image from 'next/image';
import { Post } from "@entities-server/post/type/postListType";
import { Tag } from "src/shared/ui";

export default function PostCard({title,group,createDate,pageId,tags, thumbnail}:Post){
  return (
    <Link href={`/post/${pageId}`} >
      <div className="bg-white max-w-[400px]">
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