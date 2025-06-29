
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
    <div className="h-full overflow-y-scroll">
      <PostViewer recordMap={recordMap}/>
      {/* <div>여기는 댓글 기능추가</div> */}
    </div>
  )
}