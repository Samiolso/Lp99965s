import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./kontakt.scss"

const Kontakt = () => {

  const _url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.678145539857!2d17.106011951387842!3d48.09715256185225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89c8836606e1%3A0xaf21cda7dc909887!2sPizzeria%20Lucky!5e0!3m2!1ssk!2ssk!4v1581666934338!5m2!1ssk!2ssk"

  return (
    <Layout>
      <SEO title="Kontakt" />
      <div className="container-kontakt" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2rem" }}>

        <div className="kontakt-text">
          Ak máte otázky kontaktujte nás na čísle <div className="kontakt-text__color"><strong>0948 211 266</strong></div>
        </div>

        <div className="map">
          <iframe title="Google map" src={_url} className="map__iframe" frameborder="0" allowfullscreen=""></iframe>
        </div>


        <div className="kontakt-text">Navštívte nás v <strong className="kontakt-text__color2">Petržalke</strong> na ulici <div className="kontakt-text__color"><strong>Vigľašská 7</strong></div></div>

      </div>
    </Layout >
  )
}

export default Kontakt
