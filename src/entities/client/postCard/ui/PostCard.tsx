import Link from "next/link";
import { Post } from "@entities-server/post/type/postListType";

export default function PostCard({title,group,createDate,pageId,state,tags, thumbnail}:Post){
  return (
    <Link href={`/post/${pageId}`} >
      <div className="">
        <p>{title}</p>
        <p>{group}</p>
        <p>{createDate}</p>
        <p>{state}</p>
        <p>{JSON.stringify(tags)}</p>
        <p>{pageId}</p>
        <p>{thumbnail}</p>
      </div>
    </Link>
  )
}