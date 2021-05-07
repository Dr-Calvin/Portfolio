/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from 'gatsby'
import PostSlices from './PostSlices'

import back from './img/back.png'

const PostBody = ({ post, location }) => (
  <div className="mx-auto container">
    <div className=" post-header">
      <div className="back underline 2xl:-ml-8 ">
        <Link to={location.pathname.includes('/blog') ? '/blog' : '/projects'}>
          <img className="w-5 h-5" src={back} alt="backButton" />
          back to list
        </Link>
      </div>
      <br />
      <h1 className="text-5xl font-sans text-gray-900 mb-12">
        {RichText.asText(post.title.raw).length !== 0
          ? RichText.asText(post.title.raw)
          : 'Untitled'}
      </h1>
    </div>
    {/* Go through the slices of the post and render the appropiate one */}
    <PostSlices slices={post.body} />
  </div>
)

export default PostBody
