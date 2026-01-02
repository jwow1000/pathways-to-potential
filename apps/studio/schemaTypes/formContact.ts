import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'formContact',
  title: 'Form Contact',
  description: 'A contact from a potential client from the contact us form',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'First and last name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'insurance',
      title: 'Insurance',
      type: 'string',
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      description: 'subject of message',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'string',
    }),
  ],
})
