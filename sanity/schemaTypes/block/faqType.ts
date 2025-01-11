import { defineField, defineType } from 'sanity';
export const faqType = defineType({
    name:'faq',
    type:'document',
    fields:[
        defineField({
            name:'title',
            type:'string',
        }),
        defineField({
            name:'body',
            type: 'block',

        })

    ],
    preview:{
        select:{
            title:'title',
        },
    },
})