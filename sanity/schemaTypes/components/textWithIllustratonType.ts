import { defineType, defineField } from 'sanity'

export const textWithIllustrationType = defineType({
  name: 'textWithIllustration',
  type: 'object',
  title: 'Text With Illustrations',
  fields: [
    defineField({ name: 'heading', type: 'string', title: 'Heading' }),
    defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt' }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Illustration Image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alternative Text' }],
    }),
  ],
})
