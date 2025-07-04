import { NotionAPI } from 'notion-client';

export async function getNotionPageData(notionPageId: string) {
  const notionInstance = new NotionAPI();
  try {
    const response = await notionInstance.getPage(notionPageId);
    return response;
  } catch (error) {
    console.error('[getNotionPageData]', JSON.stringify(error, null, 2));
    throw error;
  }
}
