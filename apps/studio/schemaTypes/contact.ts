import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'How to Contact Us',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'subheading',
      type: 'array',
      title: 'Short Text',
      description: 'for front page, can just be first sentences from the body',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      type: 'customImage',
      title: 'Header Image',
    }),
  ],
})
