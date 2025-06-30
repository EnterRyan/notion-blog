import TagSumList from '@entities/tagSumList/ui/TagSumList';
import accumulateTag from '../model/accumulateTag';
import {getAllPostList} from '@shared-server/getPostList';

export default async function TagSummary(){
  const tags = (await getAllPostList()).flat();
  const tagSum = accumulateTag(tags);

  return <TagSumList tagsCount={tagSum}/>
}