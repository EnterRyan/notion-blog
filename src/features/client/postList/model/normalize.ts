import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Post, PostList } from '../../../../entities/server/post/type/postListType';
import { notionApiDate, notionApiGroup, notionApiState, notionApiTags, notionApiTitle } from '../types/notionApiTypes';

export function normalize(postList:PageObjectResponse[]):PostList{
  const reponseData = new Array<Post>;
  postList.map((item)=>{
    reponseData.push(extraData(item));
  })
  return reponseData;
}

function extraData(pageData:PageObjectResponse):Post{
  const name = pageData.properties['Name'] as notionApiTitle;
  const tags = pageData.properties['Tags'] as notionApiTags;
  const state = pageData.properties['state'] as notionApiState;
  const group = pageData.properties['group'] as notionApiGroup;
  const createdDate = pageData.properties['Created Date'] as notionApiDate;

  return {
    title: name.title[0]?.plain_text,
    tags: tags.multi_select.map((tag) => tag.name),
    state: state.status?.name??"시작 전", 
    group: group.rich_text[0]?.plain_text??'',
    createDate: createdDate.date?.start ?? '',
    pageId: pageData.id,
  }
}