import { NotionRenderer } from 'react-notion-x'
import {ExtendedRecordMap} from 'notion-types'

type PostViewerType = {
  recordMap:ExtendedRecordMap
}

export default function PostViewer({recordMap}:PostViewerType){
  return (
    <NotionRenderer 
      recordMap={recordMap}
      darkMode={false}
    />
  )
}