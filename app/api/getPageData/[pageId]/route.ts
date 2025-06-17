import { NextResponse } from "next/server";
import { NotionAPI } from "notion-client";


export async function GET(request: Request, { params }: { params: { pageId: string } }) {
  const { pageId } = await params;
  const notionInstance = new NotionAPI();
  try { 
    console.log('[getPageData] pageId:', pageId);
    const response = await notionInstance.getPage(pageId);
    console.log('[getPageData] Success:', response);
    return NextResponse.json(response);
  } catch (error) {
    console.error('[getPageData]', JSON.stringify(error, null, 2));
    throw error;
  }
}

