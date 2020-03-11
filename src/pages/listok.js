import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./listok.scss"

import Listok1 from "../images/listok1.png"
import Listok2 from "../images/listok2.png"

const Lístok = () => (
  <Layout>
    <SEO title="Jedálny lístok" />
    <div style={{ paddingTop: "3rem", maxWidth: "130rem", margin: "0 auto" }}>
      <img className="listok" src={Listok2} alt="" />
      <img className="listok" src={Listok1} alt="" />
    </div>
  </Layout>
)

export default Lístok
