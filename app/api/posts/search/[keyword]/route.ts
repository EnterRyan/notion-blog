import { NextRequest } from "next/server"
import Fuse from "fuse.js";

import getAllPostList from "@shared-server/getPostList/getAllPostList";

type getParamType = {params:Promise<{keyword:string}>}

export async function GET(req:NextRequest,{params}:getParamType){
  const {keyword} = await params;
  const totalData = await getAllPostList();
  

  const fuse = new Fuse(totalData,{
    keys:['title', 'tags'],
    threshold: 0.3,
  })

  const result = fuse.search(keyword);

  return Response.json({result});
}