import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type PropertyValue = PageObjectResponse['properties'][string];

type notionApiTitle = Extract<PropertyValue,{type:'title'}>;
type notionApiTags = Extract<PropertyValue,{type:'multi_select'}>;
type notionApiState = Extract<PropertyValue,{type:'status'}>;
type notionApiGroup = Extract<PropertyValue,{type:'rich_text'}>;
type notionApiDate = Extract<PropertyValue,{type:'date'}>;
type notionThumbnail = Extract<PropertyValue,{type:'files'}>

export type {notionApiTitle,notionApiTags, notionApiState, notionApiGroup ,notionApiDate, notionThumbnail};
