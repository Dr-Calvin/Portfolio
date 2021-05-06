import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import { Layout, PostBody } from 'components'

// Query for the Blog Post content in Prismic
export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismicPost(uid: { eq: $uid }) {
      id
      uid
      lang
      type
      url
      data {
        date
        title {
          raw
        }
        subtitle {
          raw
        }
        body {
          ... on PrismicPostBodyText {
            slice_label
            slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_label
            slice_type
            primary {
              quote {
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
    prismicNavigation {
      ...HeaderQuery
    }
  }
`

// Sort and display the different slice options

// Display the title, date, and content of the Post

const Post = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const post = data.prismicPost.data
  const { prismicNavigation } = data

  return (
    <Layout navigation={prismicNavigation}>
      <PostBody blogPost={post} />
    </Layout>
  )
}

export default withPreview(Post)
