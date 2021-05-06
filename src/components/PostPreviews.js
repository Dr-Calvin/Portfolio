/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Link } from 'gatsby'
import { RichText, Date } from 'prismic-reactjs'

// Function to retrieve a small preview of the post's text
const firstParagraph = (post) => {
  // // Find the first text slice of post's body
  const firstTextSlice = post.body.find((slice) => slice.slice_type === 'text')
  if (firstTextSlice != null) {
    // Set the character limit for the text we'll show in the homepage
    const textLimit = 300
    const text = RichText.asText(firstTextSlice.primary.text.raw)
    const limitedText = text.substring(0, textLimit)

    if (text.length > textLimit) {
      // Cut only up to the last word and attach '...' for readability
      return <p>{`${limitedText.substring(0, limitedText.lastIndexOf(' '))}...`}</p>
    }
    // If it's shorter than the limit, just show it normally
    return <p>{text}</p>
  }
  // If there are no slices of type 'text', return nothing
  return null
}

const thumbnailGrabber = (post) => {
  const firstImage = post.body.find((slice) => slice.slice_type === 'image_with_caption')
  return !firstImage ? null : (
    <img
      className="md:w-48 md:h-full w-full mr-0 object-cover"
      src={firstImage.primary.image.url}
      alt={firstImage.primary.image.alt}
    />
  )
}

// A summary of the Blog Post
const PostSummary = ({ post, id }) => {
  // Store and format the blog post's publication date
  let postDate = Date(post.node.data.date)
  postDate = postDate
    ? new Intl.DateTimeFormat('en-UK', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(postDate)
    : ''

  // // Default title when post has no title set
  const defaultTitle = 'Untitled'
  const defaultsubtitle = ''

  return (
    <div className="post-summary mx-auto mb-12" key={id}>
      {/* Renders a small preview of the post's text */}

      <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:h-44">
            <div className="md:w-48 md:h-full">{thumbnailGrabber(post.node.data)}</div>
          </div>
          <div className="pb-8 pt-4 px-8 w-full">
            <div className="uppercase tracking-wide font-semibold">
              <div className="flex flex-row ">
                <div className="flex-column w-3/4 title">
                  <h2 className=" w-full font-sans text-xl text-indigo-500">
                    {/* We render a link to a particular post
                     * using the linkResolver for the url and its title */}
                    <Link to={post.node.url}>
                      {RichText.asText(post.node.data.title.raw).length !== 0
                        ? RichText.asText(post.node.data.title.raw)
                        : defaultTitle}
                    </Link>
                  </h2>
                </div>
                <div className="flex-column w-1/4 hidden md:inline ">
                  <div className="blog-post-date ml-auto text-right pr-4">{postDate}</div>
                </div>
              </div>
            </div>
            <Link
              to={post.node.url}
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              <h3>
                {' '}
                {RichText.asText(post.node.data.subtitle.raw).length !== 0
                  ? RichText.asText(post.node.data.subtitle.raw)
                  : defaultsubtitle}
              </h3>
            </Link>
            <div className="mt-2 text-gray-500 h-10 ">{firstParagraph(post.node.data)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PostPreviews = ({ posts }) => {
  if (!posts) return null
  return (
    <div className=" container flex mx-auto">
      <div className="flex-row w-full">
        {posts.map((post) => (
          <PostSummary post={post} key={post.node.id} />
        ))}
      </div>
    </div>
  )
}

export default PostPreviews
