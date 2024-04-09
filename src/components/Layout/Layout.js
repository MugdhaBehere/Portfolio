import React from "react"
import Header from "../header.js"
import Footer from "../Footer/Footer.js"
import './layout.css';
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="content">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
