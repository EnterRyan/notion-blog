import { PostListFetcher } from "@features-client/postList";

export default function Main(){
  return (
    <main className='grid-contents-layout h-full'>
      <div className="area-post h-full bg-amber-400">
        <PostListFetcher/>
      </div>
      <div className="area-project">there is Project Section</div>
      <div className="area-study">there is Study Section</div>
    </main>
  )
}