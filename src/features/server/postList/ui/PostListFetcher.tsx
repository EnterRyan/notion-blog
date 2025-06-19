import { GetPostList } from "../model/GetPostList";
import PostListBox from "@entities/postList/ui/PostListBox";

type PostListFetcherProps = {
  category : string;
}

export default async function PostListFetcher({category}:PostListFetcherProps){
  const result = await GetPostList(category);

  return (
    <PostListBox result={result}/>
  )
}