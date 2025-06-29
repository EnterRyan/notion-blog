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
        <p className="text-gray-600 text-sm">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="project-study-content h-full ">
      <div className="bg-white overflow-hidden h-full flex flex-col">
        {/* 테이블 헤더 */}
        <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between text-xs font-medium text-gray-700 uppercase tracking-wider">
            <span className="dark:text-white">제목</span>
            <div className="flex items-center gap-16">
              <span className="hidden sm:block dark:text-white">분류</span>
              <span className="dark:text-white">날짜</span>
            </div>
          </div>
        </div>

        {/* 포스트 목록 - 스크롤 가능 */}
        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="divide-y divide-gray-100 dark:bg-gray-800 ">
            {result.map((item, index) => (
              <div key={`${item.pageId}-${index}`} className={index === result.length - 1 ? "pb-14" : ""}>
                <PostRow {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
