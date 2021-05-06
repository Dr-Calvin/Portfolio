/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from 'gatsby'
import PostSlices from './PostSlices'

import back from './img/back.png'

const PostBody = ({ blogPost }) => (
  <div>
    <div className="container post-header">
      <div className="back underline lg:-ml-8 ">
        <Link to="/blog">
          <img className="w-5 h-5" src={back} alt="backButton" />
          back to list
        </Link>
      </div>
      <br />
      <h1 className="text-5xl font-sans text-gray-900 mb-12">
        {RichText.asText(blogPost.title.raw).length !== 0
          ? RichText.asText(blogPost.title.raw)
          : 'Untitled'}
      </h1>
    </div>
    {/* Go through the slices of the post and render the appropiate one */}
    <PostSlices slices={blogPost.body} />
  </div>
)

export default PostBody
