
type GetInfinitePostListType = {category : string,pageSize : number, cursor:string};
export async function getInfinitePostList(
  category:string, 
  pageSize:number,
  cursor?:string
  ){
  const baseUrl = `/api/postList?category=${category}&pageSize=${pageSize}&cursor=${cursor}`;

  const res = await fetch(baseUrl);
  if (!res.ok) throw new Error('에러 발생!');
  const data =await res.json();
  return data;
}