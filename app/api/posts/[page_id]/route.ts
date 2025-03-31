import { NextRequest } from "next/server";
import { notion } from "@shared-server/notionInstance";

export async function GET(req:NextRequest,{params}:{params:{page_id:string}}){
  const id = params.page_id;
  try{
    const blocks = await notion.blocks.children.list({
      block_id:id,
    });
    return Response.json({
      id, 
      content: blocks,
    })  
  }
  catch(error){
    console.error('[NotionApi::Get Page Contents]',error);
    return Response.json({status:500});
  }
}