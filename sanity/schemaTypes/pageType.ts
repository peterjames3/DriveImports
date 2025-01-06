import {defineField, defineType, defineArrayMember } from 'sanity';

export const pageType = defineType({
    name:'page',
    title:'Pages',
    type:'document',
    fields:[
        defineField({
            name:'title',
            title:'Page Title',
            type:'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name:'slug',
            title:'Page Slug',
            type:'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()

        }),
        defineField({
            name:'pageBuilder',
            type:'array',
            title:'Page Sections',
            of: [
                defineArrayMember({ name: 'hero', type: 'hero' }),
                defineArrayMember({ name: 'textWithIllustration', type: 'textWithIllustration' }),
                defineArrayMember({ name: 'gallery', type: 'gallery' }),
                defineArrayMember({ name: 'services', type: 'services' }),
                defineArrayMember({ name: 'sparepartImportationProcess', type: 'sparepartImportationProcess' }),
                defineArrayMember({ name: 'trendingImports', type: 'trendingImports' }),
                defineArrayMember({ name: 'featuredProductsCategories', type: 'featuredProductsCategories' }),
                defineArrayMember({ name: 'lubricants', type: 'lubricants' }),
                defineArrayMember({ name: 'customerReviews', type: 'customerReviews' }),
                defineArrayMember({ name: 'newsLetter', type: 'newsLetter' }),
            ]
        })
    ]
})