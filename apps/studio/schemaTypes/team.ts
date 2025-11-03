import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  description: 'Bio and Image of a Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'First and last name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({
      name: 'portrait',
      title: 'Portrait',
      description: 'Image to use for portrait',
      type: 'customImage',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      description: 'Short Bio',
      type: 'array',
      of: [{type: 'block'}], 
    })
  ]
})