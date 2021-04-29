import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/reset.css'
import '../styles/tailwind.css'

const Layout = ({ isHomepage, children, navigation, footer }) => (
  <>
    <Header isHomepage={isHomepage} navigation={navigation} />
    {children}
    <Footer footer={footer} />
  </>
)

export default Layout
