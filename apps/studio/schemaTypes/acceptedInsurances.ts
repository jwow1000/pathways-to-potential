import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'acceptedInsurances',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Name of Insurance Provider',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Logo/Image',
      description: 'Image of the Insurance logo',
      type: 'customImage',
    }),
    defineField({
      name: 'link',
      title: 'External Link',
      description: "Link to providers website (optional)",
      type:'url',
    }),

  ]
})