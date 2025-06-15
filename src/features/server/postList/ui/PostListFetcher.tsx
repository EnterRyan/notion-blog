import { GetPostList } from "../model/GetPostList";
import PostListBox from "@entities/postList/ui/PostListBox";

export default async function PostListFetcher(){
  const result = await GetPostList();

  return (
    <PostListBox result={result}/>
  )
}