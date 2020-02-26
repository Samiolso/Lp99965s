import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./dakujeme.scss"

const Dakujeme = () => {

  return (
    <Layout>
      <SEO title="Ďakujeme" />
      <div className="container-dakujeme" >

        <div className="dakujeme-text">
          Ďakujeme Vám za objednávku.
        <div className="dakujeme-text__color">
            Potvrdenie sme zaslali na Váš email.
        </div>
        </div>

      </div>
    </Layout >
  )
}

export default Dakujeme
