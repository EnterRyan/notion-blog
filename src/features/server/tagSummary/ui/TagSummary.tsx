import TagSumList from '@entities/tagSumList/ui/TagSumList';
import { GetPostList } from '@features-server/postList/model/GetPostList';
import accumulateTag from '../model/accumulateTag';

export default async function TagSummary(){
  const tags= (await Promise.all([
    GetPostList("tech"),
    GetPostList("study"),
    GetPostList("project"),
  ])).flat();

  const tagSum = accumulateTag(tags);

  return <TagSumList tagsCount={tagSum}/>
}