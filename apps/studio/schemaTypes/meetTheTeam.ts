import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'meetTheTeam',
  title: 'Meet the Team',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'body',
      type: 'customPortable',
      title: 'Content',
    }),
    defineField({
      name: 'image',
      type: 'customImage',
      title: 'Header Image',
    }),
    
  ],
})
