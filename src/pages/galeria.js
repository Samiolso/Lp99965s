import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MyGallery from "../components/gallery"
import "./galeria.scss"

const Galeria = () => (
  <Layout>
    <SEO title="Galéria" />

    <div>
      <div className="gallery-header">Pozrite si našu galériu</div>

      <div className="gallery">
        <MyGallery />
      </div>
    </div>
  </Layout>
)

export default Galeria
