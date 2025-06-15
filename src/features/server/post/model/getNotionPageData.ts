import { NotionAPI } from 'notion-client';
export async function getNotionPageData(notionPageId:string){
  const notionInstance = new NotionAPI();
  try{
    const response = await notionInstance.getPage(notionPageId);
    console.log(response);
    return response;
  }
  catch(error){
    console.error('[getNotionPageData]', error);
    return null;
  }
}