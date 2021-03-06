import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import { Layout, PostPreviews } from 'components'

// Query for the Blog Home content in Prismic

export const query = graphql`
  query getBlogs {
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
            subtitle {
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
              ... on PrismicPostBodyImageWithCaption {
                id
                slice_label
                slice_type
                primary {
                  image {
                    alt
                    url
                  }
                  caption {
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

const Blog = ({ data, location }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const titleInfo = data.prismicBloghome.data
  const posts = data.allPrismicPost.edges
  const { prismicNavigation } = data

  return (
    <Layout location={location} waves="true" title={titleInfo} navigation={prismicNavigation}>
      <div className="xl:container mx-auto px-4">
        <PostPreviews posts={posts} />
      </div>
    </Layout>
  )
}

export default withPreview(Blog)
