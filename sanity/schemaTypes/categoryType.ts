// category document type with its corresponding fields
//The defineField and defineType helper functions  are not required, but they provide autocomplete suggestions
//and can catch errors in your configuration in code editors with TypeScript tooling
import {defineField, defineType} from 'sanity';
export const  categoryType = defineType({
    name: 'category',
    title: 'Categories',
    type: 'document',
    fields:[
        defineField({
            name: 'name',
            title:'Name',
            type:'string'
        }),
        defineField({
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options:{ source:'name'}
        }),

        defineField({
            name:'image',
            title:'Image',
            type:'image',
            options:{hotspot: true},
            fields:[
                {
                    name:'alt',
                    title:'Alt',
                    type:'string'
                },
            ]
        }),
        defineField({
            name:'url',
            title:'URL',
            type:'url'
        }),

    defineField({
        name: 'description',
        title:'Description',
        type:'string'

    }),
    ],
})