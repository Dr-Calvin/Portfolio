import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import { Layout, BlogPosts } from 'components'
import waves from '../styles/img/waves.svg'

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

export const Homepage = ({ data }) => {
  if (!data) return null
  const { prismicNavigation } = data

  return (
    <Layout isHomepage navigation={prismicNavigation}>
      <p className="text-center py-20 py text-5xl">Coming Soon...</p>
    </Layout>
  )
}

export default Homepage
