import { defineField, defineType} from 'sanity';
export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
          name:'title',
          title: 'Title',
          type:'string',
        }),
        defineField({
            name:'slug',
            title: 'Slug',
            type:'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type:'reference',
            to: [{ type: 'category' }],
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type:'string',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name:'reviews',
            title: 'Reviews',
            type: 'array',
            of: [{ type:'review' }]
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true}
        }),
        defineField({
            name:'supplier',
            title: 'Supplier',
            type:'string'
        })


    
    ],
})