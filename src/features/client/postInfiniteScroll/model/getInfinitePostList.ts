
type GetInfinitePostListType = {category : string,pageSize : number, cursor:string};
export async function getInfinitePostList(
  category:string, 
  pageSize:number,
  cursor?:string
  ){
  // 쿼리파라미터로 undefined 보내기  
  const baseUrl = new URL( `/api/postsList`, window.location.origin);
  baseUrl.searchParams.set("category", category);
  baseUrl.searchParams.set("pageSize", pageSize.toString());
  if (cursor) { baseUrl.searchParams.set("cursor", cursor);}
  
  const res = await fetch(baseUrl);
  if (!res.ok) throw new Error('에러 발생!');
  const data =await res.json();
  return data;
}