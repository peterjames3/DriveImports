import {defineField, defineType, defineArrayMember } from 'sanity';

export  const homePageType = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [ defineField({
        name: 'title',
        title: 'Page Title',
        type: 'string',
    }),
    defineField({
        name: 'sections',
        title: 'Page Sections',
        type: 'array',
        of: [
          //defineArrayMember( {type: 'heroType'}),
           // {type: 'textWithIllustrationType'},
            //{type: 'galleryType'},
           // {type: 'servicesType'},
            //{type: 'sparepartImportationProcessType'},
           // {type: 'trendingImportsType'},
           // {type: 'featuredProductsCategoriesType'},
           // {type: 'lubricantsType'},
           // {type: 'customerReviewsType'},
           // {type: 'newsLetterType'}
        ]
    })
    ]
})