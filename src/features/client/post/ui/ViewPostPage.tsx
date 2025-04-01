
import { PostViewer } from "@entities-client/post";
import { getNotionPageData } from "../model/getNotionPageData";

export default async function ViewPostPage({ pageId }: { pageId: string }){
  const recordMap = await getNotionPageData(pageId);
  if(!recordMap){
    return (
      <div> Error 500, Cannot get PageData....</div>
    )
  }
  return(
    <PostViewer recordMap={recordMap}/>
  )
}