import getAllPostList from "@shared-server/getPostList/getAllPostList";
import { PostListBox } from "@entities/postList";
import keywordSearch from "@shared-common/utils/dataMap/keywordSearch";

type SearchPostType = {params:Promise<{keyword:string}>}
export default async function SearchPost({params}:SearchPostType){
  const {keyword} = await params;
  const decodedKeyword = decodeURIComponent(keyword)
  const totalData = await getAllPostList();

  const postList = keywordSearch(totalData, decodedKeyword);
  return (
    <PostListBox result={postList}/>
  )
}