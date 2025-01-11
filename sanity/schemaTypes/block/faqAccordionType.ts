import { defineField, defineType } from "sanity";

export const faqAccordionType = defineType({
  name: "faqAccordion",
  title:'Faq Accordion',
  type: "object",
  fields: [
    defineField({
        name:'title',
        title:'Title',
        type:'string',
    }),
    defineField({
        name:'faqs',
        title:'FAQs',
        type:'array',
        of:[{type:'reference', to: [{type:'faqtype'}]}],
    })
  ],
  preview:{
        select:{
            title:'title',
        },
  },
});