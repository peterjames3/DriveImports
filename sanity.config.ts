//This configuration file is specifically  designed for the sanity studio, which is  mounted on the /app/admin/[[...index]]/page.tsx route
//It centralizes important settings  for the studio, such as the project ID, dataset, content schema, and plugins.
//one can  customize and manage your sanity studio experience by modying this file
// import { dataset, projectId } from ''
import { defineConfig } from 'sanity';
import {structureTool} from 'sanity/structure'
import { dataset, projectId, apiVersion } from './sanity/env'
//create a barrel file to organize  the below imports
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'
import { schemas } from './sanity/schemaTypes/schemas';

const { authorType, blogCategoryType, categoryType, blogType, productType, trendingType, customerReviewType } = schemas;

export default defineConfig({
   name:'default',
   title:'idrive-imports-sanity-studio',

   
  projectId,
  dataset,
  apiVersion,
  basePath:"/admin",
  plugins: [structureTool()],
 schema:{
    types:[ authorType, blogCategoryType, categoryType, blogType, productType, trendingType, customerReviewType]
 }, 

})


