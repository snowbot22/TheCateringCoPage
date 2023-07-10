import * as React from "react"
import "../assets/css/global.css"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}

export default Layout
