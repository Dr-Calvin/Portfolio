import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Title from './Title'
// import '../styles/reset.css'
import '../styles/global.css'

const Layout = ({ isHomepage, children, navigation, footer, title }) => (
  <div className="flex flex-col min-h-screen ">
    <Header isHomepage={isHomepage} navigation={navigation} />
    <div className="wave-bg">
      <Title title={title} className="my-32" />
    </div>
    <div className="container mx-auto flex-grow">{children}</div>
    <Footer footer={footer} />
  </div>
)

export default Layout
