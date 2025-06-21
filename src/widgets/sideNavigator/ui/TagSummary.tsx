import Tag from '../../../shared/common/components/tag/Tag';

interface TagSummaryProps {
  tags: { name: string; count: number }[];
}

export default function TagSummary({ tags }: TagSummaryProps) {
  return (
    <div className="w-full mt-6 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow">
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">태그별 포스팅 개수</h3>
      <div className="flex flex-row flex-wrap gap-2">
        {tags.map(tag => (
          <div key={tag.name} className="flex flex-row items-center rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-1 shadow-sm max-w-full">
            <Tag tag={tag.name} />
            <span className="ml-1 bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs font-bold">{tag.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 