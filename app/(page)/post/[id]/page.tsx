

export default async function PostPage({ params }: { params: { id: string } }) {
  return <div>PostPage {params.id}</div>; 
}
