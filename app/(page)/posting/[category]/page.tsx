import { InfiniteScrollPostCard } from "@features-client/postInfiniteScroll";
type PostingPageProps = {
  params: Promise<{ category: string }>
}

export default async function PostListPage({params}:PostingPageProps){
  const {category} = await params;
  return(
    <InfiniteScrollPostCard category={category}/>
  )
}