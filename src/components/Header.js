import React from 'react'
import { Link, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

const Header = ({ isHomepage, navigation }) => {
  if (!navigation) return '<p>Hazzar</p>'
  const homepageClass = isHomepage ? '' : ''
  const topNav = navigation.data.top_navigation

  return (
    <header className={`site-header ${homepageClass}`}>
      <Link to="/">
        <div className="logo">Mitch Site</div>
      </Link>
      <nav>
        <ul>
          {topNav.map((navItem, index) => (
            <li key={`link-${index}`}>
              <Link to={`/${RichText.asText(navItem.link_label).toLowerCase()}`}>
                {RichText.asText(navItem.link_label)}
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
        link_label {
          text
        }
      }
    }
  }
`

export default Header
