import { NotionAPI } from 'notion-client';

export async function getNotionPageData(notionPageId: string) {
  if (!process.env.NOTION_API_KET) {
    throw new Error('NOTION_TOKEN is not defined');
  }

  const notionInstance = new NotionAPI({
    authToken: process.env.NOTION_API_KET,
  });

  try {
    console.log('[getNotionPageData] Requesting page:', notionPageId);
    const response = await notionInstance.getPage(notionPageId);
    console.log('[getNotionPageData] Success:', response);
    return response;
  } catch (error) {
    console.error('[getNotionPageData] Error:', JSON.stringify(error, null, 2));
    throw error;
  }
}
