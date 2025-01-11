// Trending  document type with it coreesponding fields 
import { defineField, defineType } from 'sanity';

export const trendingType = defineType ({
  name:'trendingImports',
  title: 'Trending Imports',
  type:'document',
  fields:[
    defineField({
        name: 'product',
        title: 'Title',
        type:'string'
    }),
    defineField({
        name:'image',
        title: 'Image',
        type: 'image',
        options:{
            hotspot: true
        }
    }),

    defineField({
        name: 'description',
        title: 'Description',
        type:'string'
    }),
    defineField({
        name:'supplier',
        title: 'Supplier',
        type:'reference',
        weak:true,
        to: {
            type:'product'
        }
    }),
 
  ],
  orderings: [
    {
      name:'releaseDateDesc',
      title:'Release Date, New',
      by:[
        {field: 'releaseDate', direction: 'desc'}
      ]
    }
  ]
})
/*
If no sort order are defined, sanity will do its best to guess what fields would make ense to sort by
When no ordering is specified:

If the document type has string fields named title, name, label, heading, header, caption or description, we enable options to order by all of these.
If your type has no fields named any of the above, we will generate ordering configs for all fields of primitive types, that is fields of type string, number, or boolean.
If you specify your own ordering, we skip the default heuristics above.
 */