import React from 'react'
import { Link } from 'gatsby'
import FeaturedPost from './FeaturedPost'

const thumbnailGrabber = (post) => {
  const firstImage = post.body.find((slice) => slice.slice_type === 'image_with_caption')
  return !firstImage ? null : (
    <img
      className="top-0 bottom-0 absolute m-auto min-w-full h-full object-cover"
      src={firstImage.primary.image.url}
      alt={firstImage.primary.image.alt}
    />
  )
}

const FeaturedContent = ({ featuredPosts, featuredProjects }) => (
  <div>
    <div className=" mt-12 w-full mx-auto">
      <div className="flex-row flex-wrap md:flex">
        {featuredPosts.map((post, index) => (
          <div
            key={`post-${index}`}
            className="flex-col flex h-64 md:h-80 lg:h-96 md:w-1/2 mx-auto xl:flex-1 flex-wrap"
          >
            <FeaturedPost
              link={post.node.url}
              image={thumbnailGrabber(post.node.data)}
              title={post.node.data.title.raw}
            />
          </div>
        ))}
      </div>
    </div>
    <div className="ml-8 mr-8">
      I enjoy writing about the design process and many other topics, you can read some articles in
      my blog.
    </div>
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-8 mr-8 rounded-full"
    >
      <Link to="/blog">Blog </Link>
    </button>
    <div className=" mt-12 w-full mx-auto">
      <div className="flex-row flex-wrap md:flex">
        {featuredProjects.map((post, index) => (
          <div
            key={`post-${index}`}
            className="flex-col flex h-64 md:h-80 lg:h-96 flex-1 flex-wrap"
          >
            <FeaturedPost
              link={post.node.url}
              image={thumbnailGrabber(post.node.data)}
              title={post.node.data.title.raw}
            />
          </div>
        ))}
      </div>
    </div>
    <div className="ml-8 mr-8">Check out some of my recent projects</div>
    <button
      type="button"
      className="bg-blue-500 ml-8 mr-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      <Link to="/projects">Projects </Link>
    </button>
  </div>
)

export default FeaturedContent
