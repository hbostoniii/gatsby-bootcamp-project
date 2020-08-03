import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import "../styles/style.scss"
import layourStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layourStyles.container}>
      <div className={layourStyles.content}>
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
