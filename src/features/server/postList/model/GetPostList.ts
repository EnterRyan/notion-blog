import { notion } from '@shared-server/instances/notionInstance';
import { normalize } from '../../../../shared/common/utils/normalize';
import { PageObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';


export async function GetPostList(){
  const dataBaseId = process.env.NOTION_TECHDB_ID;
  if (!dataBaseId) throw new Error('데이터베이스 ID가 없습니다');

  const response:QueryDatabaseResponse = await notion.databases.query({
    database_id : dataBaseId!,
  })
  
  const postList = normalize(response.results as PageObjectResponse[]);
  return postList;
}
