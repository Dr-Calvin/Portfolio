import React from 'react'
import { RichText } from 'prismic-reactjs'

const Title = ({ title }) => {
  if (!title) return null
  return (
    <div className="text-red-300 px-4 max-w-6xl mx-auto text-center mt-10" data-wio-id={title.id}>
      <h1 className="text-white text-3xl md:text-5xl pt-32 mb-8">
        {RichText.asText(title.headline.raw)}
      </h1>
      <p className="blog-description">{RichText.asText(title.description.raw)}</p>
    </div>
  )
}

export default Title
