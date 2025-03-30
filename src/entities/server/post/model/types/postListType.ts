export type PostState = '시작 전' | '진행 중' | '완료';
export type Post = {
  title : string,
  tags : string[],
  state : PostState,
  group : string,
  createDate : string,
  pageId :string
}

export type PostList = Post[];