import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import { Layout } from 'components'
import { ImageCaption, Text } from '../components/slices'

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
const ProjectSlices = ({ slices }) =>
  slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case 'text':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <Text slice={slice} />
            </div>
          )

        case 'image_with_caption':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <ImageCaption slice={slice} />
            </div>
          )

        default:
      }
    })()
    return res
  })

// Display the title, date, and content of the Post
const ProjectBody = ({ devProject }) => (
  <div>
    <div className="container post-header">
      <div className="back">
        <Link to="/projects">back to list</Link>
      </div>
      <h1>
        {RichText.asText(devProject.title.raw).length !== 0
          ? RichText.asText(devProject.title.raw)
          : 'Untitled'}
      </h1>
    </div>
    {/* Go through the slices of the project and render the appropiate one */}
    <ProjectSlices slices={devProject.body} />
  </div>
)

const Project = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const project = data.prismicProject.data
  const { prismicNavigation } = data

  return (
    <Layout navigation={prismicNavigation}>
      <ProjectBody devProject={project} />
    </Layout>
  )
}

export default withPreview(Project)
