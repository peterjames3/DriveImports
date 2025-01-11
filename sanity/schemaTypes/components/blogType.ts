import {defineArrayMember, defineField, defineType} from 'sanity';

export const blogType = defineType({
    name: 'blogPost',
    title: 'Blog Post',
    type:'document',
    fields: [
        defineField({
            name: 'title',
            type:'string',
            title: 'Title',
            validation: Rule => Rule.required().max(60)
        }),

        defineField({
            name:'slug',
            type:'slug',
            title: 'Slug',
            options: { source: 'title', maxLength: 60}
        }),
        defineField({
            name: 'metaDescription',
            type: 'string',
            title: 'Meta Description',
            description:'A short description (150-160) for SEO and search engine results',
            validation: Rule => Rule.required().max(160)
        }),

        
    defineField({
        name: 'author',
        type: 'reference',
        to: {type: 'author'},
      }),
      
    defineField({
        name: 'categories',
        type: 'array',
        of: [defineArrayMember({type: 'reference', to: {type: 'blogcategory'}})],
      }),
   
        defineField({
            name:'mainImage',
            title:'Main Image',
            type:'image',
            options: {
                hotspot: true
            },
            fields:[
                {
                    name:'alt',
                    type:'string',
                    title: 'Alternative Text'
                }
            ]
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of:[{type:'block'}]
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published At',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm:ss'
            }
        })
    
    ],
    
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})