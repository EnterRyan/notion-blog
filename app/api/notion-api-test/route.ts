import { NextResponse } from 'next/server';
import { normalize, PostList } from '@entities-server/post';

import { notion } from '@shared-server/notionInstance';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export async function GET(){
  const dataBaseId = process.env.NOTION_DB_ID;

  const response:QueryDatabaseResponse = await notion.databases.query({
    database_id : dataBaseId!,
  })
  
  const postList = normalize(response.results); 

  return NextResponse.json(postList);
}