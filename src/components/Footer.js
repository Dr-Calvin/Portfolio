import React from 'react'
import { graphql } from 'gatsby'
// import ReactHtmlParser from 'react-html-parser'
import prismicLogo from '../images/logo-prismic.svg'

const Footer = () => (
  <footer className="flex-shrink-0 mt-8">
    <figure className="md:flex bg-gray-100 mt-6 rounded-xl object-bottom">
      <img
        className="w-16 pt-6 h-auto my-8 mx-auto"
        src={prismicLogo}
        alt=""
        width="80"
        height="80"
      />
      <div className="text-center md:text-left my-auto">
        <blockquote>
          <p className="text-lg font-semibold">Powered by Prismic</p>
        </blockquote>
      </div>
    </figure>
  </footer>
)

export const query = graphql`
  fragment FooterQuery on PrismicFooter {
    data {
      credit {
        html
      }
      imgcred {
        url
      }
      imglink {
        url
      }
      credittitle {
        html
        text
        raw
      }
    }
  }
`

export default Footer
