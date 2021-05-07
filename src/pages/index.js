import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import { Layout, FeaturedContent } from 'components'
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
      <FeaturedContent featuredPosts={featuredPosts} featuredProjects={featuredProjects} />
    </Layout>
  )
}

export default withPreview(Homepage)
