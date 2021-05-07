/* eslint-disable react/jsx-filename-extension */
import React from 'react'

// eslint-disable-next-line import/no-cycle
import {
  Footer, Header, Title, SEO,
} from 'components'
import '../styles/global.css'

const Layout = ({
  isHomepage, children, navigation, footer, title, waves, pathname,
}) => {
  let topbit = ''
  const tim = () => {
    if (waves) {
      if (isHomepage) topbit += 'h-520'
      else topbit += 'h-360'
      topbit += ' bg-wave -mt-14 sm:-mt-16'
    }
    return topbit
  }
  return (
    <div className="flex flex-col min-h-screen ">
      <SEO pathname={pathname} />
      <Header navigation={navigation} />
      <div className={tim()}>
        <Title title={title} />
      </div>
      <div className="container content-center mt-20 mx-auto px-4 max-w-7xl flex-grow pb-12">
        {children}
      </div>
      <Footer footer={footer} />
    </div>
  )
}

export default Layout
