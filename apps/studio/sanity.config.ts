import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'pathways-studio',

  projectId: 'hxji6d4u',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singletons section
            S.listItem()
              .title('About Page')
              .child(S.editor().schemaType('about').documentId('about')),
            
            S.listItem()
              .title('Contact Page')
              .child(S.editor().schemaType('contact').documentId('contact')),

            S.listItem()
              .title('How It Works')
              .child(S.editor().schemaType('howItWorks').documentId('howItWorks')),

            S.listItem()
              .title('Meet The Team')
              .child(S.editor().schemaType('meetTeam').documentId('meetTeam')),
            
            S.listItem()
              .title('Services')
              .child(S.editor().schemaType('services').documentId('services')),

            S.divider(),

            // 👇 Collections (regular repeatable docs)
            ...S.documentTypeListItems().filter(
              (item) => !['about', 'contact', 'howItWorks', 'meetTeam', 'services'].includes(item.getId()!),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
