import Footer from "./Footer"
import "../assets/css/global.css"
import Header from "./Header"
import React from "react"
import WsspButton from "./WsspButton"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <WsspButton />
      <Footer />
    </>
  )
}

export default Layout
