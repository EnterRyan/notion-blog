import { PostListFetcher } from "@features-server/postList";
import Link from "next/link";

export default function Main(){
  return (
    <div className='grid-contents-layout h-full '>
      <article className="area-post">
        <div className="section-header">
          <h2 className="section-title">최신 포스트</h2>
          <Link href="/posting/tech" className="section-more">
            더보기 →
          </Link>
        </div>
        <PostListFetcher category="tech" listType="card" />
      </article>

      <article className="area-project">
        <div className="section-header">
          <h2 className="section-title">프로젝트</h2>
          <Link href="/posting/project" className="section-more">
            더보기 →
          </Link>
        </div>
        <div className="text-gray-700 h-full">
          <PostListFetcher category="project" listType="row"/>
        </div>
      </article>

      <article className="area-study">
        <div className="section-header">
          <h2 className="section-title">학습 노트</h2>
          <Link href="/posting/study" className="section-more">
            더보기 →
          </Link>
        </div>
        <div className="text-gray-700 h-full">
          <PostListFetcher category="study" listType="row"/>
        </div>
      </article>
    </div>
  )
}