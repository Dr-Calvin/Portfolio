import React, { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import logo from '../images/brand2.svg'
import open from '../images/open-window.png'
import close from '../images/close-window.png'

const Header = ({ isHomepage, navigation }) => {
  const [showToggle, setShowToggle] = useState(false)
  const [navColor, setNavColor] = useState('bg-nav py-2')

  useEffect(() => {
    window.onscroll = () => {
      setNavColor(
        window.pageYOffset > 300
          ? 'py-0 bg-opacity-70 bg-gray-500 sticky '
          : 'bg-nav py-2'
      )
    }
  }, [])

  if (!navigation) return null
  const homepageClass = isHomepage ? 'text-red-500' : ''
  const topNav = navigation.data.top_navigation

  return (
    <header
      className={`site-header ${navColor} top-0 z-50 transition
  ${homepageClass} `}
    >
      <nav
        className={`flex flex-wrap items-center px-5 justify-between xl:px-20`}
      >
        <Link aria-label="Mitch, Back to homepage" to="/">
          <img className="-mt-3  logo w-64" src={logo} alt="Website" />
        </Link>
        <div className="flex md:hidden">
          <button id="hamburger" onClick={() => setShowToggle(!showToggle)}>
            <img
              className={showToggle ? 'hidden' : 'block'}
              src={open}
              width="40"
              height="40"
            />
            <img
              className={showToggle ? '' : 'hidden'}
              src={close}
              width="40"
              height="40"
            />
          </button>
        </div>
        <ul
          className={`${
            showToggle ? '' : 'hidden'
          } md:flex w-full md:w-auto text-right text-bold mt-0 `}
        >
          {topNav.map((navItem, index) => (
            <li
              className="block md:inline-block transition-all text-white hover:text-gray-300 px-3 py-3 border-b-2 border-transparent md:hover:border-blue-900"
              key={`link-${index}`}
            >
              <Link to={`/${RichText.asText(navItem.url_path.raw)}`}>
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
