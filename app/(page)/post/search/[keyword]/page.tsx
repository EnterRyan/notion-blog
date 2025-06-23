import Fuse from "fuse.js";
import getAllPostList from "@shared-server/getPostList/getAllPostList";
import { PostListBox } from "@entities/postList";

type SearchPostType = {params:Promise<{keyword:string}>}
export default async function SearchPost({params}:SearchPostType){
  const {keyword} = await params;
  const totalData = await getAllPostList();

  const fuse = new Fuse(totalData,{
    keys:['title', 'tags'],
    threshold: 0.3,
  })
  const result = fuse.search(keyword);
  const postList = result.map(r => r.item);
  return (
    <PostListBox result={postList}/>
  )
}