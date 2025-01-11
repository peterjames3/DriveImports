import { defineField, defineType } from 'sanity'

export const aboutUsPageType = defineType({
    name: 'aboutUsPage',
    title: 'About Us Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
        }),
        defineField({
            name: 'sections',
            title: 'Page Sections',
            type: 'array',
            of: [
              //  { type: 'hero' },
             //   { type: 'textWithIllustration' },
               // { type: 'gallery' },
               // { type: 'services' },
                //{ type: 'sparepartImportationProcess' },
              //  { type: 'trendingImports' },
               // { type: 'featuredProductsCategories' },
               // { type: 'lubricants' },
                //{ type: 'customerReviews' },
               // { type: 'newsLetter' }
            ]
        })
    ]
})