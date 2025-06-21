import Link from "next/link"
import { Post } from "@shared-common/types"
import { Tag } from "@shared-common/components/tag"

export default function PostRow(post: Post) {
  const { pageId, title, group, createDate, tags, state } = post

  return (
    <Link href={`/post/${pageId}`} className="block group">
      <article className=" bg-gray-100 dark:bg-gray-700 flex items-center justify-between py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border-b border-gray-100 last:border-b-0">
        {/* 왼쪽: 제목과 태그 */}
        <div className="flex-1 min-w-0 mr-4">
          {/* 제목 */}
          <div className="mb-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
              {title}
            </h3>
          </div>

          {/* 상태 배지와 태그들 */}
          <div className="flex items-center gap-2 overflow-hidden">
            {/* 상태 배지 (프로젝트용) - 태그 앞에 위치 */}
            {state && state !== "완료" && (
              <span
                className={`px-2 py-1 text-xs rounded-full flex-shrink-0 ${
                  state === "진행 중" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                }`}
              >
                {state}
              </span>
            )}

            {/* 태그들 */}
            <div className="flex gap-1 overflow-hidden">
              {tags.slice(0, 3).map((tag, index) => (
                <div key={`${tag}-${index}`} className="flex-shrink-0">
                  <Tag tag={tag} />
                </div>
              ))}
              {tags.length > 3 && <span className="text-xs text-gray-400 flex items-center">+{tags.length - 3}</span>}
            </div>
          </div>
        </div>

        {/* 오른쪽: 그룹과 날짜 */}
        <div className="flex items-center gap-4 text-sm text-gray-500 flex-shrink-0">
          <span className="hidden sm:block">{group}</span>
          <time dateTime={createDate} className="whitespace-nowrap">
            {createDate}
          </time>
        </div>
      </article>
    </Link>
  )
}
