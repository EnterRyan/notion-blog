import {PageObjectResponse,PartialPageObjectResponse, QueryDatabaseResponse,} from '@notionhq/client/build/src/api-endpoints';
import { Post, PostList, PostState } from '../types/postListType';
import { notionApiDate, notionApiGroup, notionApiState, notionApiTags, notionApititle } from '../types/notionApiTypes';

function isFullPageObject(
  page: PageObjectResponse | PartialPageObjectResponse
): page is PageObjectResponse {
  return page.object === 'page';
}

export function normalize( 
  postList: (PageObjectResponse | PartialPageObjectResponse)[])
  :PostList{
  const responseData = new Array<Post>;
  postList.forEach((item)=>{
    if (isFullPageObject(item)) {
      responseData.push(extraData(item));
    }
  })
  return responseData;
}

const STATUS_MAP: Record<string, PostState> = {
  '시작 전': '시작 전',
  '진행 중': '진행 중',
  '완료': '완료',
};


function extraData(pageData:PageObjectResponse):Post{
  const name = pageData.properties['Name'] as notionApititle;
  const tags = pageData.properties['Tags'] as notionApiTags;
  const state = pageData.properties['state'] as notionApiState;
  const group = pageData.properties['group'] as notionApiGroup;
  const createdDate = pageData.properties['Created Date'] as notionApiDate;

  const rawStatus = state.status?.name ?? '';
  const safeState: PostState = STATUS_MAP[rawStatus] ?? '시작 전';

  return {
    title: name.title[0]?.plain_text ?? '제목없음',
    tags: tags.multi_select.map((tag) => tag.name),
    state: safeState, 
    group: group.rich_text[0]?.plain_text ?? '',
    createDate: createdDate.date?.start ?? '',
    pageId: pageData.id,
  }
}