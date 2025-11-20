import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePageAssets',
  title: 'Assets for landing page',
  type: 'document',
  fields: [
    defineField({
      name: 'headerText',
      type: 'string',
      title: 'Main Header',
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'banner',
      type: 'customImage',
      title: 'Header Image',
    }),
    
  ],
})
