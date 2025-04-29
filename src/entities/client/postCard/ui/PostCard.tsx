import Link from "next/link";
import Image from 'next/image';
import { Post } from "@entities-server/post/type/postListType";

export default function PostCard({title,group,createDate,pageId,tags, thumbnail}:Post){
  return (
    <Link href={`/post/${pageId}`} >
      <div className="">
        <Image src={thumbnail} alt="썸네일" width={400} height={100} className="rounded-lg object-cover"/>
        <div className="flex flex-col">
          <p className="font-post-title">{title}</p>
          <p>{group}</p>
          <p>{createDate}</p>
          <p>{JSON.stringify(tags)}</p>
        </div>
      </div>
    </Link>
  )
}