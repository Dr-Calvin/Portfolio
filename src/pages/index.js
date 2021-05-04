import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import { Layout } from 'components'

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

const links = [
  {
    text: 'UI/UX DESIGN',
    url: 'https://www.gatsbyjs.com/docs/how-to/',
    description:
      "UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience.",
    color: '#1099A8',
  },
  {
    text: 'FRONT END DEVELOPMENT',
    url: 'https://www.gatsbyjs.com/docs/reference/',
    description:
      "Front End Development is building out the visual components of a website. Using HTML, CSS , and Javascript, I build fast, interactive websites. This also may include a CMS, API's or other integrations.",
    color: '#BC027F',
  },
  {
    text: 'PRODUCT DEVELOPMENT',
    url: 'https://www.gatsbyjs.com/docs/conceptual/',
    description:
      'The work that I am most interested in is 0-1 work (helping you get your idea into the world). A recent example of this is Omelo a proof of concept that I built end to end (UI, back end business logic etc).',
    color: '#0D96F2',
  },
  {
    text: 'Plugin Library',
    url: 'https://www.gatsbyjs.com/plugins',
    description:
      'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
    color: '#8EB814',
  },
]

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

      <h1 className="text-xl">My Specialities:</h1>
      <ul>
        <li />
        {links.map((link) => (
          <li className="my-4" key={link.url}>
            <span>
              <a className="capitalize text-bly" href={`${link.url}`}>
                {link.text}
              </a>
              <p className="ml-8">{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default withPreview(Homepage)
