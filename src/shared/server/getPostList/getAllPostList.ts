import { GetPostList } from "./GetPostList";

//모든 카테고리의 PostList를 구하는 함수.
export async function getAllPostList(){
  const [tech, study,project] = await Promise.all([
    GetPostList("tech"),
    GetPostList("study"),
    GetPostList("project"),
  ])
  const result = [...tech.postList, ...study.postList, ...project.postList];
  return result;
}