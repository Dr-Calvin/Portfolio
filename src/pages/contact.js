import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import { Layout } from 'components'

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
  const links = [
    {
      text: 'UI/UX DESIGN',
      url: '#3',
      description:
        "UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience.",
      color: '#1099A8',
    },
    {
      text: 'FRONT END DEVELOPMENT',
      url: '#2',
      description:
        "Front End Development is building out the visual components of a website. Using HTML, CSS , and Javascript, I build fast, interactive websites. This also may include a CMS, API's or other integrations.",
      color: '#BC027F',
    },
    {
      text: 'PRODUCT DEVELOPMENT',
      url: '#1',
      description:
        "The work that I am most interested in is 0-1 work (helping you get your idea into the world). If you're able to put it into words I will put it into code and build it from the ground up.",
      color: '#0D96F2',
    },
  ]

  if (!data) return null
  // Define the Project Home page & Project post content returned from Prismic
  const contactPageTitle = data.prismicContact.data
  const { prismicNavigation } = data

  return (
    <Layout title={contactPageTitle} waves="true" navigation={prismicNavigation}>
      <div />
      <p className=" py-20 py text-xl">
        I am currently available to take on exciting projects. See my previous work history on
        {' '}
        <a className="underline text-blue-300" href="https://linkedin.com/in/mitchelfollett">
          LinkedIn.
        </a>
        {' '}
        I&apos;d love to get get to know you over a brew, so don’t hesitate to get in touch.
      </p>

      <h1 className="text-xl">How I can Help:</h1>
      <ul>
        <li />
        {links.map((link) => (
          <li key={link.url} className="my-4">
            <span>
              <a className="capitalize text-bly" href={`${link.url}`}>
                {link.text}
              </a>
              <p className="ml-8">{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <div>GitHub</div>
      <div>Email</div>
      <div>LinkedIn</div>
    </Layout>
  )
}

export default withPreview(Projects)
