import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import "../styles/navbar.scss"
import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={navbarStyles.header}>
      <h1>
        <Link to="/" className={navbarStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={navbarStyles.navList}>
          <li>
            <Link
              to="/"
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/blog/"}
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to={"/About/"}
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/Contact/"}
              className={navbarStyles.navItem}
              activeClassName={navbarStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
