import { ViewPostPage } from '@features-client/post';

//test id 1c684787-4098-8069-8305-c6d7cbe607b2
interface PostPageProps {
  params: { id: string }
}

export default async function PostPage({ params }: PostPageProps) {
  const {id} = await params;
  return (
    <div>
      <ViewPostPage pageId={id} />
    </div>
  );
}