import { PostRow } from "@entities/postRow"
import { PostList } from "@shared-common/types"


type PostRowListProps = {
  result: PostList
  emptyMessage?: string
}

export default function PostRowList({ result, emptyMessage = "표시할 포스트가 없습니다" }: PostRowListProps) {
  if (!result || result.length === 0) {
    return (
      <div className="flex items-center justify-center h-20">
        <p className="text-gray-500 text-sm">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="project-study-content">
      <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
        {/* 테이블 헤더 */}
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between text-xs font-medium text-gray-600 uppercase tracking-wider">
            <span>제목</span>
            <div className="flex items-center gap-4">
              <span className="hidden sm:block">분류</span>
              <span>날짜</span>
            </div>
          </div>
        </div>

        {/* 포스트 목록 - 스크롤 가능 */}
        <div className="flex-1 overflow-y-auto">
          <div className="divide-y divide-gray-100">
            {result.map((item, index) => (
              <PostRow key={`${item.pageId}-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
