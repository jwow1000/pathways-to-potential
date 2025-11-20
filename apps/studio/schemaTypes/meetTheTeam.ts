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
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      type: 'customImage',
      title: 'Header Image',
    }),
    defineField({
      name: 'teamMembers',
      title: 'List of Team Members',
      type: 'array',
      of: [{type: 'teamMember'}]
    })
  ],
})
