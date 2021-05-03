import React from 'react'
import { RichText } from 'prismic-reactjs'

const Title = ({ title }) => {
  if (!title) return null
  return (
    <div
      className="text-red-500 px-4 max-w-4xl mx-auto text-center"
      data-wio-id={title.id}
    >
      <h1 className={`text-white text-4xl pt-32`}>
        {RichText.asText(title.headline.raw)}
      </h1>
      <p className="blog-description">
        {RichText.asText(title.description.raw)}
      </p>
    </div>
  )
}

export default Title
