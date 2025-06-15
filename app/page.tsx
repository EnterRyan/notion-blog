import { PostListFetcher } from "@features-server/postList";

export default function Main(){
  return (
    <div className='grid-contents-layout h-full'>
      <div className="area-post h-full">
        <PostListFetcher/>
      </div>
      <div className="area-project">there is Project Section</div>
      <div className="area-study">there is Study Section</div>
    </div>
  )
}