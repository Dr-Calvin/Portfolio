import React from 'react'
import { RichText } from 'prismic-reactjs'

export default ({ slice }) => (
  <div>
    <div className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
      <blockquote>{RichText.asText(slice.primary.quote.raw)}</blockquote>
    </div>
    <br />
  </div>
)
