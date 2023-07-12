import * as React from "react"
import "../assets/css/global.css"
import Header from "./Header"
import Footer from "./Footer"
import WsspButton from "./WsspButton"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
        <main>
          {children}
      
        </main>
        <WsspButton />
      <Footer />
     
    </>
  )
}

export default Layout
