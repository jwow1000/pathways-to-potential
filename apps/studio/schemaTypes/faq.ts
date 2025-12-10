import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'A frequently asked question',
  description: 'A Post for the Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'The Question',
      description: 'The Frequently asked Question',
      type: 'string',
    }),
     defineField({
      name: 'answer',
      title: 'The answer',
      type: 'array',
      description: 'The answer that will appear below the question',
      of: [{ type: 'block' }],
    }),
    
  ],
})
