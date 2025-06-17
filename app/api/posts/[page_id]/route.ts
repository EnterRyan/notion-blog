import { NextRequest } from "next/server";
import { notion } from "@shared-server/notionInstances/notionInstance";

type getParamType = {
  params:Promise<{page_id:string}>
}

export async function GET(req:NextRequest,{params}:getParamType){
  const {page_id} = await params;
  try{
    const blocks = await notion.blocks.children.list({
      block_id:page_id,
    });
    return Response.json({
      page_id, 
      content: blocks,
    })  
  }
  catch(error){
    console.error('[NotionApi::Get Page Contents]',error);
    return Response.json({status:500});
  }
}