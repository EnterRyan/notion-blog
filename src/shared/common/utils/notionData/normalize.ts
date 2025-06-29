import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { NotionApiDate, NotionApiGroup, NotionApiState, NotionApiTags, NotionApiTitle, NotionThumbnail } from '@shared-common/types/notionApiTypes';
import { Post, PostList } from '@shared-common/types';

export function normalize(postList:PageObjectResponse[]):PostList{
  const responseData = new Array<Post>;
  postList.map((item)=>{
    responseData.push(extraData(item));
  })
  return responseData;
}

function extraData(pageData:PageObjectResponse):Post{
  const name = pageData.properties['Name'] as NotionApiTitle;
  const tags = pageData.properties['Tags'] as NotionApiTags;
  const state = pageData.properties['state'] as NotionApiState;
  const group = pageData.properties['group'] as NotionApiGroup;
  const createdDate = pageData.properties['Created Date'] as NotionApiDate;
  const thumbnail = pageData.properties['Thumbnail'] as NotionThumbnail;
  const pageId = pageData.id;

  let publicUrl;
  if(pageData.public_url){
    const url = new URL(pageData.public_url);
    publicUrl = `${url.protocol}//${url.host}`;
  }
  else publicUrl="";

  return {
    title: name.title[0]?.plain_text,
    tags: tags.multi_select.map((tag) => tag.name),
    state: state.status?.name??"시작 전", 
    group: group.rich_text[0]?.plain_text??'',
    createDate: createdDate.date?.start ?? '',
    pageId,
    thumbnail: extraNewThumbnail(pageId, publicUrl, thumbnail)
  }
}
/**
 * 기존 URL에서 필요한 S3 위치를 찾는 정규표현식 작업 및 URL 재 조립 함수
 * @param pageId 해당 Notion 포스트의 페이지 ID
 * @param publicUrl 외부 링크
 * @param s3Thumbnail 기존에 만료 기간이 설정된 S3 링크
 * @returns 외부공개 페이지의 이미지 URL
 */
function extraNewThumbnail(pageId: string, publicUrl: string, s3Thumbnail?: NotionThumbnail){
  const fileObj = s3Thumbnail?.files?.[0];
  let s3Url = "";
  // NotionApi의 타입을 위한 예외처리 및 작업.(외부링크는 사용X)
  if (!fileObj) return ""
  if (fileObj.type === "file") s3Url= fileObj.file.url
  if (fileObj.type === "external") return "";

  //정규 표현식 작업
  try{
    const url = new URL(s3Url);
    const pathname = url.pathname; // "/fd2ed4e4.../a662da25.../image.jpeg"
    const match = pathname.match(/\/([a-f0-9\-]+\/[^\/]+\.(jpg|jpeg|png|gif|bmp))/i);
    if(!match) return "";
    const temp =  match[1];

    const s3Path = temp.replace("/", ":");
    const newImagePath = `${publicUrl}/image/attachment:${s3Path}?table=block&id=${pageId}`
    return newImagePath;
  }
  catch (error) {
    console.error("Invalid URL:", error);
    return "";
  }
}