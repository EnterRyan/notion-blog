import { PostRowList } from "@entities/postRowList";
import PostListBox from "@entities/postList/ui/PostListBox";
import { GetPostList } from "@shared-server/getPostList";

type PostListFetcherProps = {
  category : string;
  listType ?: string;
}

export default async function PostListFetcher({category,listType="card"}:PostListFetcherProps){
  const result = await GetPostList(category);
  if(listType === "row"){
    return <PostRowList result={result.postList}/>
  }
  return (
    <PostListBox result={result.postList}/>
  )
}