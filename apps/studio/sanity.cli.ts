import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'hxji6d4u',
    dataset: 'production'
  },
  deployment: {
    appId: 'c2kj0od87exwf0w2th9myi5t',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
