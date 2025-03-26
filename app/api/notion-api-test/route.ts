import { NextResponse } from 'next/server';

import { notion } from '@/src/shared/server/notionInstance';
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export async function GET(){
  const dataBaseId = process.env.NOTION_DB_ID;

  const response = await notion.databases.query({
    database_id : dataBaseId!,
  })
  const page = response.results[0] as PageObjectResponse;
  console.log(page.properties);
  return NextResponse.json(response.results);
}