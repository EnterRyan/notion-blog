import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type PropertyValue = PageObjectResponse['properties'][string];

type NotionApiTitle = Extract<PropertyValue,{type:'title'}>;
type NotionApiTags = Extract<PropertyValue,{type:'multi_select'}>;
type NotionApiState = Extract<PropertyValue,{type:'status'}>;
type NotionApiGroup = Extract<PropertyValue,{type:'rich_text'}>;
type NotionApiDate = Extract<PropertyValue,{type:'date'}>;
type NotionThumbnail = Extract<PropertyValue,{type:'files'}>

export type {NotionApiTitle, NotionApiTags, NotionApiState, NotionApiGroup, NotionApiDate, NotionThumbnail};
