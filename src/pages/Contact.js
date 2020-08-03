import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact</h1>
        <p>
          Email: <a href="https://google.com">example.email.com</a>
        </p>
        <p>
          Follow me on:
          <a target="blank" href="https://twitter.com">
            Twitter
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default Contact
