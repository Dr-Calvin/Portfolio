import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import { Layout, BlogPosts } from 'components'
// import Layout from '../components/Layout'
// import BlogPosts from '../components/BlogPosts'

// Query for the Blog Home content in Prismic

export const query = graphql`
  query projectQuery {
    prismicProjecthome {
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
    allPrismicProject(sort: { fields: data___date, order: DESC }) {
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
              ... on PrismicProjectBodyText {
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

const Projects = ({ data }) => {
  if (!data) return null
  // Define the Project Home page & Project post content returned from Prismic
  const projectPage = data.prismicProjecthome.data
  const prjx = data.allPrismicProject.edges
  const { prismicNavigation } = data

  return (
    <Layout title={projectPage} waves="true" navigation={prismicNavigation}>
      <div className="xl:container mx-auto px-4">
        <BlogPosts posts={prjx} />
      </div>
    </Layout>
  )
}

export default withPreview(Projects)
