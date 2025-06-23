export function selectDbId(category:string){
  if(category === "tech"){
    return process.env.NOTION_TECHDB_ID;
  }
  if(category === "project"){
    return process.env.NOTION_PROJECTDB_ID;
  }
  if(category === "study"){
    return process.env.NOTION_EDUCATIONDB_ID;
  }
  throw new Error("Invalid category");
}