import { ViewPostPage } from '@features-server/post';

//test id 1c684787-4098-8069-8305-c6d7cbe607b2
type PostPageProps = {
  params: Promise<{ id: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const {id} = await params;
  return (
    <div>
      <ViewPostPage pageId={id} />
    </div>
  );
}