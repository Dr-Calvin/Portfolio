import React, { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import logo from '../images/brand2.svg'
import open from '../images/open-window.png'
import close from '../images/close-window.png'

const Header = ({ navigation }) => {
  const [showToggle, setShowToggle] = useState(false)
  // const [navColor, setNavColor] = useState('bg-nav sticky py-2 bg-opacity-70')
  const [navLogoWidth, setNavLogoWidth] = useState('w-64')
  const [hamburgerWidth, setHamburgerWidth] = useState('w-10 h-10')
  const [navHeight, setNavHeight] = useState('py-3')

  useEffect(() => {
    window.onscroll = () => {
      setNavLogoWidth(window.pageYOffset > 300 ? 'w-44' : 'w-64')
      setHamburgerWidth(window.pageYOffset > 300 ? 'w-6 h-6' : 'h-10 w-10')
      setNavHeight(window.pageYOffset > 300 ? 'py-1' : 'py-3')
    }
  }, [])

  if (!navigation) return null
  const topNav = navigation.data.top_navigation

  return (
    <header
      className="site-header sticky h-0 top-0 w-full transition duration-500 ease-in-out z-50"
    >
      <nav className="flex flex-wrap bg-nav bg-opacity-85 items-center px-5 justify-between xl:px-20">
        <Link to="/">
          <img className={`-mt-3  logo ${navLogoWidth}`} src={logo} alt="Website" />
        </Link>
        <div className="flex md:hidden">
          <button
            id="hamburger"
            className="py-2 focus:outline-none"
            type="button"
            onClick={() => setShowToggle(!showToggle)}
          >
            <img alt="o" className={showToggle ? 'hidden' : `${hamburgerWidth}`} src={open} />
            <img alt="x" className={showToggle ? `${hamburgerWidth}` : 'hidden'} src={close} />
          </button>
        </div>
        <ul
          className={`${
            showToggle ? '' : 'hidden'
          } md:flex w-full md:w-auto text-right text-bold mt-0 `}
        >
          {topNav.map((navItem, index) => (
            <li
              className={`block md:inline-block transition-all text-white hover:text-gray-300 px-3 ${navHeight} border-b-2 border-transparent md:hover:border-blue-900`}
              // eslint-disable-next-line react/no-array-index-key
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
