import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import { Layout } from 'components'
import FeaturedPost from '../components/FeaturedPost'
// import nepal from '../components/img/nepal.png'
// Query for the Blog Home content in Prismic

export const query = graphql`
  query MyQuery {
    prismicBloghome {
      data {
        description {
          raw
        }
        headline {
          raw
        }
        image {
          url
        }
      }
      id
      type
    }
    allPrismicPost(limit: 4, sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          ...FeaturedPost
        }
      }
    }
    allPrismicProject(limit: 3, sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          ...FeaturedProject
        }
      }
    }

    prismicNavigation {
      ...HeaderQuery
    }
  }
`

// Using the queried Blog Home document data, we render the top section

const Homepage = ({ data, location }) => {
  if (!data) return null
  const { prismicNavigation } = data
  const featuredProjects = data.allPrismicProject.edges
  const featuredPosts = data.allPrismicPost.edges
  // console.log(featuredPosts)

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

  // const posts = data.allPrismicPost.edges
  const title = {
    headline: {
      raw: [
        {
          text: `Hello, my name is Mitch and I'm a full-stack developer/ IT
        Specialist, based in Birmingham, UK.`,
        },
      ],
    },
    description: { raw: [{ text: '' }] },
  }

  return (
    <Layout
      location={location}
      isHomepage
      title={title}
      waves="true"
      navigation={prismicNavigation}
    >
      {' '}
      <div className=" mt-12 w-full mx-auto">
        <div className="flex-row flex-wrap md:flex">
          {featuredPosts.map((post, index) => (
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
      <div>
        I enjoy writing about the design process and many other topics, you can read some articles
        in my blog.
      </div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Blog
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
      <div>Check out some of my recent projects</div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Projects
      </button>
    </Layout>
  )
}

export default withPreview(Homepage)
