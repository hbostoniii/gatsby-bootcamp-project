import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const About = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h3>About</h3>
        <p>My name is Trey and I have a basketball game today</p>
        <p>
          <Link to="/Contact">Contact Me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default About
