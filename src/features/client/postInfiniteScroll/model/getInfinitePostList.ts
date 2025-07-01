/**
 * 무한 스크롤 포스트 목록 조회
 * @param category 카테고리
 * @param pageSize 페이지 사이즈
 * @param cursor 커서
 * @returns 포스트 목록, 다음 커서, 더 있는지 여부
 */
export async function getInfinitePostList(
  category:string, 
  pageSize:number,
  cursor?:string){
    console.log("called");
    // 쿼리파라미터로 undefined 보내기  
    const baseUrl = new URL( `/api/postsList`, window.location.origin);
    baseUrl.searchParams.set("category", category);
    baseUrl.searchParams.set("pageSize", pageSize.toString());
    if (cursor) { baseUrl.searchParams.set("cursor", cursor);}
    
    const res = await fetch(baseUrl);
    if (!res.ok) throw new Error('에러 발생!');
    const data =await res.json();

    return {
      postList : data.postList,
      nextCursor: data.nextCursor,
      hasMore: data.hasMore
    }
}