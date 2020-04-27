import React from "react"
import "./hodiny.scss"

export const Hodiny = ({ val }) => {

  const hours = new Date().getHours()

  const hoursWeek = (hours >= 10 && hours <= 21 && val.some(el => el === 1))

  return (
    <div className="hodiny">
      <div className="hodiny-header">Otváracie hodiny</div>
      <div className="hodiny-main">
        <div className="hodiny-main__text">
          <div className="hodiny-main__text1">Po-Št:</div>
          <div className="hodiny-main__text1">Pi-So:</div>
          <div className="hodiny-main__text1">Ne:</div>
        </div>

        <div className="hodiny-main__text">
          <span className="hodiny-main__text2">10:00 - 21:45</span>
          <span className="hodiny-main__text2">10:00 - 22:45</span>
          <span className="hodiny-main__text2">10:00 - 20:00</span>
        </div>
      </div>
      <div className="otvorene">
        {val.some(el => el === 1) ?
          <div style={{ display: "flex" }}>
            <span className="otvorene__text">Otvorené</span>
          </div>
          :
          <div style={{ display: "flex" }}>
            <span className="otvorene__text">Zatvorené</span>
          </div>
        }
      </div>

      {val.some(el => el === 3) && (
        <div style={{ fontSize: "1.3rem", paddingTop: "1rem" }}>Zatvorené z technických príčin.</div>
      )}

      {val.some(el => el === 4) && (
        <div style={{ fontSize: "1.3rem", paddingTop: "1rem" }}>Dnes je sviatok máme zatvorené.</div>
      )}

      {val.some(el => el === 5) && (
        <div style={{ fontSize: "1.3rem", paddingTop: "1rem" }}>Dovolenkové obdobie máme zatvorené.</div>
      )}
    </div>
  )
}
