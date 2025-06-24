import Avatar from './Avatar';
import TagSummary from '@features-server/tagSummary/ui/TagSummary';
import SearchForm from '@shared-common/components/searchForm/ui/searchForm';

export default async function SideNavigator(){
  return(
    <nav className='w-[250px] h-full m-3'>
      <div className="w-full flex flex-col items-center gap-4">
        <Avatar src="/test.jpg" alt="프로필 이미지" size={230} />
        <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800 border border-gray-300 max-w-xs w-full transition-colors">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">ChangeTodev Blog</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            프론트엔드 개발자 <b>김태헌</b>입니다.<br/>기술 포스팅, 개인 프로젝트, 학습내용 과 사담을 올리고 있는 블로그입니다.
          </p>
        </div>
        <SearchForm />
        <div className="flex flex-col w-full">
          <TagSummary />
        </div>
      </div>
    </nav>
  ) 
}