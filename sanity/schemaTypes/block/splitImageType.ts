import { defineField, defineType } from 'sanity';

export const splitImageType = defineType({
    name:'splitImage',
    title:'Split Image',
    type:'object',
    fields:[
        defineField({
            name:'orientation',
            type:'string',
            options:{
                list:[
                    {
                        title:'Image Left',
                        value:'imageLeft'
                    },
                    {
                        title:'Image Right',
                        value:'imageRight'
                    }
                ]
            }
        })
    ]
})