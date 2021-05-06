import React from 'react'
import { graphql } from 'gatsby'
import Icon from './Icon'
import github from './img/github.svg'
import twitter from './img/twitter.svg'
import linkedin from './img/linkedin.svg'
import dribbble from './img/dribbble.svg'

const links = [
  {
    link: 'https://twitter.com/mitch1250',
    icon: { twitter },
    alt: 'twitter',
  },
  {
    link: 'https://github.com/dr-calvin',
    icon: { github },
    alt: 'github',
  },
  {
    link: 'https://drbble.com/Mitch1240',
    icon: { dribbble },
    alt: 'dribbble',
  },
  {
    link: 'https://linkedin.com/in/mitchelfollett',
    icon: { linkedin },
    alt: 'LinkedIn',
  },
]

const Footer = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <footer className="footer bg-nav opacity-80 text-white relative pt-1 rounded-t-lg border-b-2 border-blue-700 ">
    {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
    <h2 className="text-center pt-4" />
    <div className="container mx-auto px-6">
      <div className="mt-4 border-t-2 border-gray-300 flex flex-col items-center">
        <div className="sm:w-2/3 text-center py-2">
          <div className="w-full">
            <ul className=" inline">
              {links.map((link) => (
                <Icon data={link} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-sm text-right text-black font-bold mb-2">© 2021 Mitchel Follett</p>
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
