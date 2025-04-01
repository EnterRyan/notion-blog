import ViewPostPage from "@features-client/post/ui/ViewPostPage";

//test
export default async function PostPage({ params }: { params: { id: string } }) {
  return <div>
    <ViewPostPage pageId={params.id} />
  </div>; 
}



