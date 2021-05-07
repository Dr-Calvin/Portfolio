import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import { Layout } from 'components'
import MagicHoverButton from '../components/MagicHoverButton'

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

const limg = (
  <svg
    id="linkedin"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    enableBackground="new 0 0 16 16"
    aria-hidden="true"
    className="fill-current text-center h-16 w-16 mx-auto mb-4"
  >
    <path d="M.818 5.542h3.08v9.778h-3.08v-9.778zm1.54-4.861c.984 0 1.784.79 1.784 1.763s-.8 1.762-1.784 1.762c-.987 0-1.786-.79-1.786-1.763s.798-1.762 1.786-1.762" />
    <path d="M5.829 5.542h2.952v1.336h.041c.41-.768 1.416-1.579 2.914-1.579 3.115 0 3.691 2.024 3.691 4.658v5.362h-3.077v-4.755c0-1.135-.02-2.593-1.6-2.593-1.602 0-1.846 1.235-1.846 2.512v4.836h-3.075v-9.777z" />
  </svg>
)

const gimg = (
  <svg
    viewBox="0 0 32.58 31.77"
    role="img"
    aria-hidden="true"
    focusable="false"
    preserveAspectRatio="xMidYMid meet"
    height="1em"
    width="1em"
    className="fill-current text-center h-16 w-16 mx-auto mb-4"
  >
    <path d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z" />
  </svg>
)

// Using the queried Blog Home document data, we render the top section

const Projects = ({ data, location }) => {
  const links = [
    {
      text: 'UI/UX DESIGN',
      url: '#3',
      description:
        "UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience.",
    },
    {
      text: 'FRONT END DEVELOPMENT',
      url: '#2',
      description:
        "Front End Development is building out the visual components of a website. Using HTML, CSS , and Javascript, I build fast, interactive websites. This also may include a CMS, API's or other integrations.",
    },
    {
      text: 'PRODUCT DEVELOPMENT',
      url: '#1',
      description:
        "The work that I am most interested in is 0-1 work (helping you get your idea into the world). If you're able to put it into words I will put it into code and build it from the ground up.",
    },
  ]

  if (!data) return null
  // Define the Project Home page & Project post content returned from Prismic
  const contactPageTitle = data.prismicContact.data
  const { prismicNavigation } = data

  return (
    <Layout
      location={location}
      title={contactPageTitle}
      waves="true"
      navigation={prismicNavigation}
    >
      <div />
      <h1>Hi! I&apos;m Mitch, a mostly self-taught full stack Developer</h1>
      <p className=" py-20 py text-xl">
        I have previously worked as a mechanical design engineer but found my real passion is
        programming and building things in cyberspace rather than the physical world. I am currently
        available to take on some exciting new projects. I&apos;d love to get get to know you over a
        brew, don’t hesitate to get in touch!
      </p>
      <div className="emailbtn w-full mx-auto content-center text-center">
        <button
          className="lg:w-1/6 w-40 bg-indigo-400 shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-2 hover:bg-blue-400 rounded-2xl text-3xl text-white py-4"
          type="button"
        >
          <a href="mailto:mitchelfollett@gmail.com">E-mail</a>
        </button>
      </div>
      <div className=" mt-12 mb-20 w-full mx-auto">
        <div className="flex-row md:flex flex-wrap">
          <MagicHoverButton
            colorHover="hover:bg-black"
            textColorHover="hover:text-white"
            link="https://www.github.com/dr-calvin"
            image={gimg}
            name="Github"
          />
          <br />
          <MagicHoverButton
            colorHover="hover:bg-blue-400"
            textColorHover="hover:text-white"
            link="https://www.linkedin.com/in/mitchelfollett"
            image={limg}
            name="LinkedIn"
          />
        </div>
      </div>

      <h1 className="text-xl">How I can help you:</h1>
      <br />
      <ul>
        {links.map((link) => (
          <li key={link.url} className="my-4">
            <span>
              <p className="capitalize text-bly text-xl">{link.text}</p>
              <p className="text-lg ml-8">{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default withPreview(Projects)
