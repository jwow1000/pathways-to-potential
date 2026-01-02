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
      type: 'customPortable',
      title: 'Content',
    }),
    defineField({
      name: 'image',
      type: 'customImage',
      title: 'Header Image',
    }),
    defineField({
      name: 'insurances',
      title: 'List of Accepted Insurances',
      description: 'upload logo and name of each accepted insurance',
      type: 'array',
      of: [{type: 'acceptedInsurances'}],
    })
  ],
})
