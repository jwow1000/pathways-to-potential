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
      type: 'customPortable',
      title: 'Content',
    }),
    defineField({
      name: 'whyChooseUsText',
      type: 'customPortable',
      title: 'Why Choose Us Text',
    }),
    defineField({
      name: 'banner',
      type: 'customImage',
      title: 'Header Image',
    }),
    
  ],
})
