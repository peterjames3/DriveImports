
'use client';
// This file  handles all studio-related routes using next.js dynamic routing.
//It serves as the entry point for your Sanity studio application, offering seamless integration with Next.js via the next0sanity package
 import  { NextStudio } from 'next-sanity/studio';
 import  config from  '@/sanity.config';

 export const dynamic = 'force-static';

 //export { metadata, viewport } from 'next-sanity/studio';

 export default function  StudioPage(){
    return <NextStudio config={config}/>

 }