import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  description: 'A Post for the Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Main title of the blog post',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .slice(0, 96),
      },
    }),
    defineField({
      name: 'authorCustom',
      title: 'Fill in Custom Author',
      type: 'string',
    }),
    defineField({
      name: 'linkedAuthor',
      title: 'Linked Author',
      type: 'teamMember',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      description: 'Image to use for preview and header',
      type: 'customImage',
    }),
     defineField({
      name: 'body',
      type: 'customPortable',
      description: 'Body of the Blog Post',
      title: 'Content',
    }),
    
  ],
})
