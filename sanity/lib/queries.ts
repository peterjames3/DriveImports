import { groq } from 'next-sanity';

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