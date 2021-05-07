/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import { Layout, PostBody } from 'components'

// Query for the Blog Post content in Prismic
export const query = graphql`
  query ProjectQuery($uid: String) {
    prismicProject(uid: { eq: $uid }) {
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
        body {
          ... on PrismicProjectBodyText {
            id
            primary {
              text {
                raw
              }
            }
            slice_label
            slice_type
          }
          ... on PrismicProjectBodyImageWithCaption {
            id
            slice_label
            slice_type
            primary {
              caption {
                raw
              }
              image {
                alt
                url
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

const Project = ({ data, location }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const project = data.prismicProject.data
  const { prismicNavigation } = data
  console.log(location)

  return (
    <Layout location={location} navigation={prismicNavigation}>
      <PostBody post={project} location={location} />
    </Layout>
  )
}

export default withPreview(Project)
