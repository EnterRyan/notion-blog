import { PostListFetcher } from "@features-server/postList";
import Link from "next/link";

export default function Main(){
  return (
    <div className='grid-contents-layout h-full'>
      <div className="area-post h-full">
        {/*해당 카테고리 더보기 버튼 추가 */}
        <PostListFetcher category="tech"/>
      </div>
      <div className="area-project">
        {/*해당 카테고리 더보기 버튼 추가 */}
        there is Project Section
        </div>
      <div className="area-study">
        {/*해당 카테고리 더보기 버튼 추가 */}
        there is Study Section
        </div>
    </div>
  )
}