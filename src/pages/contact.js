import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import { Layout, BlogPosts } from 'components'
// import Layout from '../components/Layout'
// import BlogPosts from '../components/BlogPosts'

// Query for the Blog Home content in Prismic

export const query = graphql`
  query contactQuery {
    prismicContact {
      data {
        description {
          raw
        }
        headline {
          raw
        }
      }
      id
      type
    }
    prismicNavigation {
      ...HeaderQuery
    }
  }
`
// Using the queried Blog Home document data, we render the top section

const Projects = ({ data }) => {
  if (!data) return null
  // Define the Project Home page & Project post content returned from Prismic
  const contactPageTitle = data.prismicContact.data
  const { prismicNavigation } = data

  return (
    <Layout
      title={contactPageTitle}
      waves="true"
      navigation={prismicNavigation}
    ></Layout>
  )
}

export default withPreview(Projects)
