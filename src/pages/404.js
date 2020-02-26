import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{
      color: "white", display: "flex", justifyContent: "center", alignItems: "center",
    }}>
      <h1>Stránka neexistuje prejdite na:</h1>
      <Link to="/objednavka/pizza">Online objednávka</Link>
    </div>
  </Layout>
)

export default NotFoundPage
