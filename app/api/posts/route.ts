import { NextResponse } from 'next/server';


import { notion } from '@shared-server/instances/notionInstance';
import { PageObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { normalize } from 'src/shared/common/utils/normalize';

export async function GET(){
  const dataBaseId = process.env.NOTION_DB_ID;
  if (!dataBaseId) throw new Error('데이터베이스 ID가 없습니다');
  
  const response:QueryDatabaseResponse = await notion.databases.query({
    database_id : dataBaseId!,
  })

  const postList = normalize(response.results as PageObjectResponse[]);

  return NextResponse.json(postList);
}