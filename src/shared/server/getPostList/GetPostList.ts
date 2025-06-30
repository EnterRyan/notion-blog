import { PageObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

import { notion } from '@shared-server/notionInstances/notionInstance';
import { normalize } from '@shared-common/utils/notionData';
import { selectDbId } from './util/selectDbId';
import { GetPostListResult } from '@shared-common/types';


// 기본으로 카테고리에 해당하는 모든 Post들을 가져오는 함수.
export async function GetPostList
(category:string, pageSize:number=6, startCursor?: string|undefined):Promise<GetPostListResult>{
  const dataBaseId = selectDbId(category);
  if (!dataBaseId) throw new Error('데이터베이스 ID가 없습니다');

  const response:QueryDatabaseResponse = await notion.databases.query({
    database_id : dataBaseId!,
    page_size : pageSize,
    start_cursor: startCursor,
  })
  const postList = normalize(response.results as PageObjectResponse[]);

  return {
    postList,
    nextCursor : response.next_cursor ?? null,
    hasMore : response.has_more ?? null
  }
}