'use client'
import Image from "next/image";
import { NotionRenderer } from 'react-notion-x'
import {ExtendedRecordMap} from 'notion-types'
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import "react-notion-x/src/styles.css";
import 'prismjs/themes/prism-okaidia.css';

type PostViewerType = {
  recordMap:ExtendedRecordMap
}

export default function PostViewer({recordMap}:PostViewerType){
  console.log("PostViewer in");
  return (
    <NotionRenderer 
      recordMap={recordMap}
      darkMode={false}
      components={{
        nextImage: Image,
        Code: Code,
        Collection: Collection,
        Equation: Equation,
      }}
      disableHeader
      fullPage={true}
    />
  )
}