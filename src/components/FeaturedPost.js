import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

const FeaturedPost = ({ link, image, title }) => (
  <div className="mb-8 shadow-xl relative overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-4 flex flex-1  lg:mx-6 mx-4 bg-white content-center text-center rounded-xl">
    {image}
    <a href={link} className="h-full">
      <div className="absolute overlay opacity-0 hover:opacity-80 h-full w-full m-auto bg-blue-600">
        <div className="absolute text-white text-center top-8 text-3xl px-8 w-full">
          {RichText.asText(title)}
        </div>
      </div>
    </a>
  </div>
)
export const query = graphql`
  fragment FeaturedPost on PrismicPost {
    url
    data {
      title {
        raw
      }
      body {
        ... on PrismicPostBodyImageWithCaption {
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
export default FeaturedPost
