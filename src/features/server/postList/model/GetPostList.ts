import { notion } from '@shared-server/notionInstances/notionInstance';

import { PageObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { normalize } from '@shared-common/utils';


export async function GetPostList(category:string){
  const dataBaseId = getDatabaseId(category);
  if (!dataBaseId) throw new Error('데이터베이스 ID가 없습니다');

  const response:QueryDatabaseResponse = await notion.databases.query({
    // page_size : 9,
    database_id : dataBaseId!,
  })
  const postList = normalize(response.results as PageObjectResponse[]);
  return postList;
}

function getDatabaseId(category:string){
  if(category === "tech"){
    return process.env.NOTION_TECHDB_ID;
  }
  if(category === "project"){
    return process.env.NOTION_PROJECTDB_ID;
  }
  if(category === "study"){
    return process.env.NOTION_EDUCATIONDB_ID;
  }
  throw new Error("Invalid category");
}