import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'howItWorks',
  title: 'How our practice works',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'parts',
      title: 'The Steps',
      description: 'Add the steps',
      type: 'array',
      of: [
        {
          name: 'step',
          title: 'Step',
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Number', type: 'number' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'blurb', title: 'Blurb', type: 'string' }),
            defineField({ name: 'image', title: 'Image', type: 'customImage' }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'number',
              media: 'image',
            },
          },
        },
      ],
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
