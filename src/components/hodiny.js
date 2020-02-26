import React from "react"
import "./hodiny.scss"

const Hodiny = ({ val }) => {

  const hours = new Date().getHours()
  const day = new Date().getDay()

  const hoursWeek = (hours >= 12 && hours <= 21 && val.some(el => el === 1))
  const hoursWeekEnd = (hours >= 11 && hours <= 21 && val.some(el => el === 1))
  const dayWeek = (day >= 0 && day <= 4)
  const dayWeekEnd = (day >= 5 && day <= 7)

  const openWeekHours = (hoursWeek && dayWeek)
  const openWeekEndHours = (hoursWeekEnd && dayWeekEnd)

  return (
    <div className="hodiny">
      <div className="hodiny-header">Otváracie hodiny</div>
      <div className="hodiny-main">
        <div className="hodiny-main__text">
          <div className="hodiny-main__text1">Po-Pi:</div>
          <div className="hodiny-main__text1">So-Ne:</div>
        </div>

        <div className="hodiny-main__text">
          <span className="hodiny-main__text2">10:00 - 22:00</span>
          <span className="hodiny-main__text2">11:00 - 22:00</span>
        </div>
      </div>
      <div className="otvorene">
        {openWeekHours || openWeekEndHours ?
          <div id="text-otvorene">Otvorené</div>
          :
          <div id="text-zatvorene">Zatvorené</div>
        }
      </div>
      {val.some(el => el === 2) && (
        <div style={{ fontSize: "1.3rem", paddingTop: "1rem" }}>Zatvorené z technických príčin.</div>
      )}
    </div>
  )
}

export default Hodiny