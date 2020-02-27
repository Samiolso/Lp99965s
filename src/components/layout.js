import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "typeface-montserrat"
import "typeface-raleway-dots"
import "./layout.scss"
import Logo from "../images/logo.png"
import { Navbar, Burger } from "./navbar"
import { Footer } from "./footer"

import CookieConsent from "react-cookie-consent";
import StyledBackgroundSection from "./bgimage"

const Layout = ({ children, data }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div>
        <StyledBackgroundSection>
          <div className="black-overlay">
            <div className="navbar">
              <Link to="/" style={{ marginLeft: "1rem" }}>
                <img
                  src={Logo}
                  alt="logo"
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "1rem",
                    height: "5rem",
                    zIndex: 10,
                    padding: "0.4rem"
                  }}
                />
              </Link>
              <Burger open={open} setOpen={setOpen} />
              <Navbar open={open} setOpen={setOpen} />
            </div>
            <main className="main">{children}
            </main>
            <Footer />

          </div>
        </StyledBackgroundSection>

        <CookieConsent
          location="bottom"
          buttonText="Súhlasím"
          cookieName="cookies"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "1.3rem", background: "rgb(255, 183, 0)" }}
        >
          <span style={{ fontSize: "1.3rem" }}>Tento web používa cookies, používaním tejto stránky súhlasíte s podmienkami.
          <a style={{ paddingLeft: "1rem", color: "rgb(255, 183, 0)", textDecoration: "underline" }} href="#">Viac info</a>
          </span>

        </CookieConsent>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
