import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Title from './Title'
// import '../styles/reset.css'
import '../styles/global.css'

const Layout = ({ isHomepage, children, navigation, footer, title, waves }) => (
  <div className="flex flex-col min-h-screen ">
    <Header isHomepage={isHomepage} navigation={navigation} />
    <div className={waves ? 'bg-wave' : ''}>
      <Title title={title} className="my-32" />
    </div>
    <div className="container mt-8 mx-auto px-4 max-w-7xl flex-grow pb-12">
      {children}
    </div>
    <Footer footer={footer} />
  </div>
)

export default Layout
