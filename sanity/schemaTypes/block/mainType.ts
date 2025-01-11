import { defineField, defineType } from 'sanity';
export const mainType = defineType({
  name:'hero',
  type:'object',
  fields: [
    defineField({
      name:'title',
      type:'string',
    }),
    defineField({
      name:'text',
      type:'block',
    }),

    defineField({
      name:'image',
      type:'image',
    }),
  ]
})