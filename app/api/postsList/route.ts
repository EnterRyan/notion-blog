import { GetPostList } from "@shared-server/getPostList";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest){
  const {searchParams} = new URL(req.url);
  const category = searchParams.get('category');
  const pageSize = parseInt(searchParams.get('pageSize')||'6',10);
  const startCursor = searchParams.get('cursor') ??undefined;

  const validCategories = ['tech', 'study', 'project'] as const;
  type Category = typeof validCategories[number];

  if (category && validCategories.includes(category as Category)) {
    const safeCategory = category as Category;
    // 팁: parseInt는 명시적으로 10진수로 인식하라고 선언 해야함 ,10
    const {postList, nextCursor, hasMore} = await GetPostList(safeCategory, pageSize, startCursor);
    
    return NextResponse.json(
      { postList, 
        nextCursor,
        hasMore
      },
      {status:200}

    )
  }
  else{
    return NextResponse.json(
      { error: `'${category}'는 유효하지 않은 category입니다.` },
      { status: 400 }
    );
  }
}