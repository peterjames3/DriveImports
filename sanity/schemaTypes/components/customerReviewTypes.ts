import { defineField, defineType } from 'sanity';

export const customerReviewType = defineType({
    name:'review',
    title:' Customer Review',
    type:'document',
    fields:[
        defineField({
            name: 'name',
            title: 'Reviewer Name',
            type:'string'
        }),
        defineField({
            name: 'rating',
            title: 'Rating (1-5)',
            type: 'number',
       
        }),
        defineField({
            name: 'comments',
            title: 'Comments',
            type:'string'
        }),
        defineField({
            name: 'date',
            title: 'Review Date',
            type: 'date'
        })
    ],
    orderings: [
        {
            name:'date',
            title: 'Review Date',
            by:[
                { field: 'date', direction: 'desc' }
            ]
        }
    ]
})