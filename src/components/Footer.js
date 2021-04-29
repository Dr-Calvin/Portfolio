import React from 'react'
import { graphql } from 'gatsby'
// import ReactHtmlParser from 'react-html-parser'

const Footer = () => (
  <footer>
    <div>Blah</div>
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
