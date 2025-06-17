import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { NotionApiDate, NotionApiGroup, NotionApiState, NotionApiTags, NotionApiTitle, NotionThumbnail } from '../types/notionApiTypes';
import { Post, PostList } from '@shared-common/types';

export function normalize(postList:PageObjectResponse[]):PostList{
  const responseData = new Array<Post>;
  postList.map((item)=>{
    responseData.push(extraData(item));
  })
  return responseData;
}

function extraData(pageData:PageObjectResponse):Post{
  const name = pageData.properties['Name'] as NotionApiTitle;
  const tags = pageData.properties['Tags'] as NotionApiTags;
  const state = pageData.properties['state'] as NotionApiState;
  const group = pageData.properties['group'] as NotionApiGroup;
  const createdDate = pageData.properties['Created Date'] as NotionApiDate;
  const thumbnail = pageData.properties['Thumbnail'] as NotionThumbnail;

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