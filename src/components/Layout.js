/* eslint-disable react/jsx-filename-extension */
import React from 'react'

// eslint-disable-next-line import/no-cycle
import {
  Footer, Header, Title, SEO,
} from 'components'
import '../styles/global.css'

const Layout = ({
  isHomepage, children, navigation, footer, title, waves, pathname,
}) => (
  <div className="flex flex-col min-h-screen ">
    <SEO pathname={pathname} />
    <Header isHomepage={isHomepage} navigation={navigation} />
    <div className={waves ? 'bg-wave -mt-14 sm:-mt-16' : ''}>
      <Title title={title} />
    </div>
    <div className="container content-center mt-20 mx-auto px-4 max-w-7xl flex-grow pb-12">
      {children}
    </div>
    <Footer footer={footer} />
  </div>
)

export default Layout
