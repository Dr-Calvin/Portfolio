import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import { Layout } from 'components'

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
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          url
          id
          uid
          type
          data {
            title {
              raw
            }
            date
            body {
              ... on PrismicPostBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
    prismicNavigation {
      ...HeaderQuery
    }
  }
`
// Using the queried Blog Home document data, we render the top section

const Homepage = ({ data }) => {
  if (!data) return null
  const { prismicNavigation } = data
  const title = {
    headline: {
      raw: [
        {
          text: `Hello, my name is Mitch and I'm a freelance developer/ IT
        Specialist, based in Birmingham, UK.`,
        },
      ],
    },
    description: { raw: [{ text: '' }] },
  }

  return (
    <Layout isHomepage title={title} waves="true" navigation={prismicNavigation}>
      <div>Project Examples</div>
      <div>Project text</div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Projects
      </button>
      <div>Blog Article Previews</div>
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
    </Layout>
  )
}

export default withPreview(Homepage)
