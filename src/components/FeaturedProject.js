import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  fragment FeaturedProject on PrismicProject {
    url
    data {
      title {
        raw
      }
      body {
        ... on PrismicProjectBodyImageWithCaption {
          id
          slice_label
          slice_type

          primary {
            image {
              url
            }
          }
        }
      }
    }
  }
`

const FeaturedProject = () => <div>null</div>

export default FeaturedProject
