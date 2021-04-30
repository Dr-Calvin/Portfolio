import React from 'react'
import { RichText } from 'prismic-reactjs'

const Title = ({ title, className }) => {
  if (!title) return null
  return (
    <div className="text-red-500 text-center" data-wio-id={title.id}>
      {/* <div className="h-32 w-32 my-6 mx-auto rounded-full" style={avatar} /> */}
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
