import { groq } from 'next-sanity';

//Fetch Home Page Data

export const getHomePageData = groq`
  *[_type == "page"]{
   _id,
    title,
   
    }
  }
`;


//Fetch Hero Data
export const getHeroData = groq`*[ _type == "heroType"]{
 heading, tagline, subtagline,
 'imageUrl': image.asset->url,
}`


//Fetch Page Data (Dynamic Pages)
export const getPageData = groq`*[_type == 'pageType' && slug.current == $slug][0]{
title,
 content[] {
      _type == "heroType" => {
        heading,
        tagline,
        "imageUrl": image.asset->url
      },
      _type == "textWithIllustration" => {
        heading,
        tagline,
        "imageUrl": image.asset->url
      }
    }
}`
//get all categories
export const categoriesQuery = groq`*[_type == 'category']{
_id,
_createdAt,
title, 

}`

//get all blog posts
export const  getAllBlogPosts = groq `*[_type=='blogPost']{
_id,
_createdAt,
title,
author,
category,
 "slug": slug.current,
   "mainImage": mainImage.asset->url,
    "altText": mainImage.alt,
    content,
}`

