import { PostListFetcher } from "@features-server/postList";

type PostingPageProps = {
  params: Promise<{ category: string }>
}

export default async function PostListPage({params}:PostingPageProps){
  const {category} = await params;
  return(
    <PostListFetcher category={category}/>
  )
}