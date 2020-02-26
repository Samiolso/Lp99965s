import React from "react"
import Logo from "../images/logo-footer.png"
import Penazenka from "../images/penazenka.svg"
import Listky from "../images/listky.svg"
import "./footer.scss"

export const Footer = () => (
  <div className="footer">
    <img className="footer-logo" src={Logo} alt="logo" />

    <div className="boxes">
      <div className="box-footer">
        <div className="box-header">Kontaktné údaje</div>
        <div className="box-main">
          <div className="box-main__text">
            <div className="box-main__text1">Adresa:</div>
            <div className="box-main__text1">Telefón:</div>
            <div className="box-main__text1">Email:</div>
          </div>

          <div className="box-main__text">
            <span className="box-main__text2">Vigľašska 7, Bratislava</span>
            <span className="box-main__text2">0950 309 099</span>
            <span className="box-main__text2">pizzalucky@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="box-footer">
        <div className="box-header">Otváracie hodiny</div>
        <div className="box-main">
          <div className="box-main__text">
            <div className="box-main__text1">Po-Pi:</div>
            <div className="box-main__text1">So-Ne:</div>
          </div>

          <div className="box-main__text">
            <span className="box-main__text2">10:00 - 22:00</span>
            <span className="box-main__text2">11:00 - 22:00</span>
          </div>
        </div>
      </div>

      <div className="box-footer">
        <div className="box-header">Platby</div>
        <div className="box-main">
          <div className="box-main__text">
            <div className="box-main__text1">
              <img src={Penazenka} alt="" style={{ height: "2rem" }} />
            </div>
            <div className="box-main__text1">
              <img src={Listky} alt="" style={{ height: "2rem" }} />
            </div>
          </div>

          <div className="box-main__text">
            <span
              className="box-main__text2"
              style={{ transform: "translateY(-1.8rem)" }}
            >
              Hotovosť
            </span>
            <span className="box-main__text2">Strávne lístky</span>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="footer-bottom__alergeny">
        <a href="/alergeny.pdf" target="_blank">
          Alergény
        </a>
      </div>
      <div className="footer-bottom__podmienky">
        <a href="#" target="_blank">
          Obchodné podmienky
        </a>
      </div>
    </div>
  </div>
)
