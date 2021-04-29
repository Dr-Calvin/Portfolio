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
const BlogHomeHead = ({ home }) => {
  const avatar = { backgroundImage: `url(${home.image.url})` }
  return (
    <div className="text-red-500 text-center" data-wio-id={home.id}>
      <div className="h-32 w-32 my-6 mx-auto rounded-full" style={avatar} />
      <h1 className="text-gray-500">{RichText.asText(home.headline.raw)}</h1>
      <p className="blog-description">
        ..{RichText.asText(home.description.raw)}
      </p>
    </div>
  )
}

export const Homepage = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const home = data.prismicBloghome.data
  const posts = data.allPrismicPost.edges
  const { prismicNavigation } = data

  return (
    <Layout isHomepage navigation={prismicNavigation}>
      <div className="wave-bg">.</div>
      <BlogHomeHead className="font-mono" home={home} />
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default withPreview(Homepage)
