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
          text
        }
        headline {
          text
        }
        image {
          url
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
const ProjectHomeHead = ({ projectPage }) => {
  const avatar = { backgroundImage: `url(${projectPage.image.url})` }
  return (
    <div className="home-header container" data-wio-id={projectPage.id}>
      <div className="blog-avatar" style={avatar} />
      <h1>{RichText.asText(projectPage.headline)}</h1>
      <p className="blog-description">{RichText.asText(projectPage.description)}</p>
    </div>
  )
}

export const projects = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const projectPage = data.prismicProjecthome.data
  const prjx = data.allPrismicProject.edges
  const { prismicNavigation } = data

  return (
    <Layout navigation={prismicNavigation}>
      <ProjectHomeHead projectPage={projectPage} />
      <BlogPosts posts={prjx} />
    </Layout>
  )
}

export default withPreview(projects)
