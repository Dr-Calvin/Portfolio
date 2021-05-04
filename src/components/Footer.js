import React from 'react'
import { graphql } from 'gatsby'
// import ReactHtmlParser from 'react-html-parser'
import prismicLogo from '../images/logo-prismic.svg'

const Footer = () => (
  <footer className="footer bg-nav opacity-80 text-white relative pt-1 rounded-t-lg border-b-2 border-blue-700 ">
    <h2 className="text-center pt-4">Check Out my Github</h2>
    <div className="container mx-auto px-6">
      <div className="mt-4 border-t-2 border-gray-300 flex flex-col items-center">
        <div className="sm:w-2/3 text-center py-2">
          <h1>Leveling up one day at a time.</h1>
          <p className="text-sm text-black font-bold mb-2">
            © 2021 Mitchel Follett
          </p>
        </div>
      </div>
    </div>
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
