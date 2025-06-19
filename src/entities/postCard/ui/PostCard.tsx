import Link from "next/link";
import Image from 'next/image';

import { Post } from "@shared-common/types";
import { Tag } from "@shared-common/components/tag";

export default function PostCard(post: Post) {
  const { pageId, title, group, createDate, tags, thumbnail } = post
  return (
    <Link href={`/post/${pageId}`} className="block group h-full">
      <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
        {/* 이미지 영역 */}
        <div className="relative w-full h-40 flex-shrink-0">
          <Image
            src={thumbnail || "/placeholder.svg?height=200&width=400"}
            alt={`${title} 썸네일`}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          />
        </div>

        {/* 콘텐츠 영역 */}
        <div className="p-3 flex flex-col">
          {/* 제목 */}
          <div className="mb-2 h-12 flex items-start">
            <h3 className="font-post-title group-hover:text-blue-600 transition-colors line-clamp-2 leading-6 text-sm">
              {title}
            </h3>
          </div>

          {/* 태그 영역 - 화면 크기별 최적화 */}
          <div className="mb-2 flex-shrink-0">
            {/* 모바일: 스크롤, 데스크톱: 래핑 */}
            <div className="flex gap-1 sm:flex-wrap sm:overflow-visible overflow-x-auto scrollbar-hide pb-1">
              {tags.slice(0, 6).map((t, index) => (
                <div key={`${t}-${index}`} className="flex-shrink-0">
                  <Tag tag={t} />
                </div>
              ))}
              {tags.length > 6 && (
                <span className="text-xs text-gray-500 whitespace-nowrap flex items-center px-1 flex-shrink-0">
                  +{tags.length - 6}
                </span>
              )}
            </div>
          </div>

          {/* 메타 정보 */}
          <div className="flex justify-between text-xs text-gray-500 pt-2 border-t flex-shrink-0">
            <span className="truncate mr-2">{group}</span>
            <time dateTime={createDate} className="flex-shrink-0">
              {createDate}
            </time>
          </div>
        </div>
      </article>
    </Link>
  )
}
