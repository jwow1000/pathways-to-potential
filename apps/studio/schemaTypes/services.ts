import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services we offer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
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
