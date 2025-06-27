import { PostList } from "@shared-common/types/postListType";
import { PostCard } from "@entities/postCard";

type PostListBoxType = {
  result:PostList;
}

export default function PostListBox({result}:PostListBoxType){
  return (
    <div className="w-full h-full p-2 sm:p-[30px]">
      <div className="pb-[3rem] overflow-y-scroll overflow-x-hidden h-full flex flex-wrap justify-center gap-5 mx-auto">
        {result.map((item,index)=>(
          <div key={index} className="post-card-wrapper">
            <PostCard 
              title={item.title} 
              group={item.group}
              createDate={item.createDate}
              pageId={item.pageId}
              state={item.state}
              tags={item.tags}
              thumbnail={item.thumbnail}
            />
          </div>
        ))}
      </div>
    </div>
  )
}