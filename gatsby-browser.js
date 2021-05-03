import * as React from 'react'
import './src/styles/tailwind.css'

import { PreviewStoreProvider } from 'gatsby-source-prismic'

const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider initialEnabled>{element}</PreviewStoreProvider>
)

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

export default wrapRootElement
