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
    <Layout
      isHomepage
      title={title}
      waves="true"
      navigation={prismicNavigation}
    >
      <p className=" py-20 py text-xl">
        I am currently available to take on exciting projects. See my previous
        work history on{' '}
        <a
          className="underline text-blue-300"
          href="https://linkedin.com/in/mitchelfollett"
        >
          LinkedIn.
        </a>{' '}
        I&apos;d love to get get to know you over a brew, so don’t hesitate to
        get in touch.
      </p>
    </Layout>
  )
}

export default withPreview(Homepage)
