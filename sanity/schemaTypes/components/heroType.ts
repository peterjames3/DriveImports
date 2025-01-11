import { defineType, defineField } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero Section',
  fields: [
    defineField({ name: 'heading', type: 'string', title: 'Heading' }),
    defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
    defineField({ name: 'subTagline', type:'string', title: ' SubTanglines'}),
    defineField({ name: 'ctaText', type: 'string', title: 'CTA Text' , description: 'Get Started'}),
    defineField({ name: 'ctaUrl', type: 'url', title: 'CTA Button  URL' , description: 'Get Started', initialValue: '/importatiton-form'}),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Background Image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alternative Text' }],
    }),
  ],
})
