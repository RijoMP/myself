import React from 'react'
import Header from './header'
import Page from './page'
import Footer from './footer'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />

    <Page>{children}</Page>
    {/* <Footer /> */}
  </>
)

export default Layout
