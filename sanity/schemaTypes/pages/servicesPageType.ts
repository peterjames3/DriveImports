import { defineField, defineType } from 'sanity';

export const servicesPageType = defineType({
    name: 'servicesPage',
    title: 'Services Page',
    type: 'document',
    fields:[
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            
        })
    ]
})