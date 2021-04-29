import * as React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider initialEnabled>{element}</PreviewStoreProvider>
)

export default wrapRootElement
