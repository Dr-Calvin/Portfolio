/* eslint-disable react/jsx-filename-extension */
import React from 'react'

// eslint-disable-next-line import/no-cycle
import { Footer, Header, Title } from 'components'
import '../styles/global.css'

const Layout = ({
  isHomepage, children, navigation, footer, title, waves,
}) => (
  <div className="flex flex-col min-h-screen ">
    <Header isHomepage={isHomepage} navigation={navigation} />
    <div className={waves ? 'bg-wave' : ''}>
      <Title title={title} className="my-32" />
    </div>
    <div className="container content-center mt-20 mx-auto px-4 max-w-7xl flex-grow pb-12">
      {children}
    </div>
    <Footer footer={footer} />
  </div>
)

export default Layout
