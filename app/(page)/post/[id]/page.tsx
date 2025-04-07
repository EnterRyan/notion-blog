import { ViewPostPage } from '@features-client/post';

//test id 1c684787-4098-8069-8305-c6d7cbe607b2
export default async function PostPage({ params }: { params: { id: string } }) {
  return <div>
    <ViewPostPage pageId={params.id} />
  </div>; 
}



