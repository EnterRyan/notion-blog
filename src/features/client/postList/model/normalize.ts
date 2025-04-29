import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Post, PostList } from '../../../../entities/server/post/type/postListType';
import { notionApiDate, notionApiGroup, notionApiState, notionApiTags, notionApiTitle, notionThumbnail } from '../types/notionApiTypes';

export function normalize(postList:PageObjectResponse[]):PostList{
  const responseData = new Array<Post>;
  postList.map((item)=>{
    responseData.push(extraData(item));
  })
  return responseData;
}

function extraData(pageData:PageObjectResponse):Post{
  const name = pageData.properties['Name'] as notionApiTitle;
  const tags = pageData.properties['Tags'] as notionApiTags;
  const state = pageData.properties['state'] as notionApiState;
  const group = pageData.properties['group'] as notionApiGroup;
  const createdDate = pageData.properties['Created Date'] as notionApiDate;
  const thumbnail = pageData.properties['Thumbnail'] as notionThumbnail;

  return {
    title: name.title[0]?.plain_text,
    tags: tags.multi_select.map((tag) => tag.name),
    state: state.status?.name??"시작 전", 
    group: group.rich_text[0]?.plain_text??'',
    createDate: createdDate.date?.start ?? '',
    pageId: pageData.id,
    thumbnail :  thumbnail?.files?.[0]?.
      type === 'file'
      ? thumbnail.files[0].file.url
      : thumbnail?.files?.[0]?.
      type === 'external'
      ? thumbnail.files[0].external.url
      : '/defaultThumbnail.png',
  }
}