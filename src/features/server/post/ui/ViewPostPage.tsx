
import { PostViewer } from "@entities/notionReder";
import { getNotionPageData } from "../model/getNotionPageData";


export default async function ViewPostPage({ pageId }: { pageId: string }){
  const recordMap = await getNotionPageData(pageId);

  if(!recordMap){
    console.error('❌ Notion 데이터 불러오기 실패:', pageId);
    return (
      <div> Error 500, Cannot get PageData....</div>
    )
  }
  return(
    <PostViewer recordMap={recordMap}/>
  )
}