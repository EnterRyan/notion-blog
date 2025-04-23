import Link from "next/link";
import Image from 'next/image';
import { Post } from "@entities-server/post/type/postListType";

export default function PostCard({title,group,createDate,pageId,state,tags, thumbnail}:Post){
  return (
    <Link href={`/post/${pageId}`} >
      <Image src={thumbnail} alt="썸네일" width={400} height={220} className="rounded-lg object-cover"/>
      <div className="">
        <p>{title}</p>
        <p>{group}</p>
        <p>{createDate}</p>
        <p>{state}</p>
        <p>{JSON.stringify(tags)}</p>
      </div>
    </Link>
  )
}