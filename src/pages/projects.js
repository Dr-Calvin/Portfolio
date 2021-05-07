import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import { Layout, PostPreviews } from 'components'

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
            subtitle {
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
      }
    }
    prismicNavigation {
      ...HeaderQuery
    }
  }
`
// Using the queried Blog Home document data, we render the top section

const Projects = ({ data, location }) => {
  if (!data) return null
  // Define the Project Home page & Project post content returned from Prismic
  const projectPage = data.prismicProjecthome.data
  const prjx = data.allPrismicProject.edges
  const { prismicNavigation } = data

  return (
    <Layout location={location} title={projectPage} waves="true" navigation={prismicNavigation}>
      <div className="xl:container mx-auto px-4">
        <PostPreviews posts={prjx} />
      </div>
    </Layout>
  )
}

export default withPreview(Projects)
