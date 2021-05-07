import React from 'react'
import { RichText } from 'prismic-reactjs'
import GatsbyLink from '../GatsbyLink'
import htmlSerializer from '../../utils/htmlSerializer'

export default ({ slice }) => (
  <div className="post-text container">
    <div>
      <RichText
        render={slice.primary.text.raw || []}
        htmlSerializer={htmlSerializer}
        serializeHyperlink={GatsbyLink}
      />
      <br />
    </div>
  </div>
)
