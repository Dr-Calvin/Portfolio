import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import logo from '../images/brand2.svg'

const Header = ({ isHomepage, navigation }) => {
  const [showToggle, setShowToggle] = useState(false)

  if (!navigation) return null
  const homepageClass = isHomepage ? 'text-red-500' : ''
  const topNav = navigation.data.top_navigation

  return (
    <header className={`site-header sticky top-0 z-50 ${homepageClass} `}>
      <nav className="flex flex-wrap items-center justify-between p-5 bg-blue-200 xl:px-20">
        <Link to="/">
          <img className="-mt-3  logo w-64" src={logo} alt="Website" />
        </Link>
        <div className="flex md:hidden">
          <button id="hamburger" onClick={() => setShowToggle(!showToggle)}>
            <img
              className={showToggle ? 'hidden' : 'block'}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
            />
            <img
              className={showToggle ? '' : 'hidden'}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
            />
          </button>
        </div>
        <ul
          className={`${
            showToggle ? '' : 'hidden'
          } md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 `}
        >
          {topNav.map((navItem, index) => (
            <li
              className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-transparent md:hover:border-blue-900"
              key={`link-${index}`}
            >
              <Link
                to={`/${RichText.asText(navItem.url_path.raw)}`}
                className="hover:border-b-2 hover:border-red-300"
              >
                {RichText.asText(navItem.link_name.raw)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export const query = graphql`
  fragment HeaderQuery on PrismicNavigation {
    data {
      top_navigation {
        link_name {
          raw
        }
        url_path {
          raw
        }
      }
    }
  }
`

export default Header
