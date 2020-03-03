import React from "react";
import { Alert } from "./alert"


export const HodinyAlert = () => {
  const hours = new Date().getHours()
  const day = new Date().getDay()

  const hoursWeek = (hours >= 10 && hours <= 21)
  const hoursWeekEnd = (hours >= 11 && hours <= 21)
  const dayWeek = (day >= 0 && day <= 4)
  const dayWeekEnd = (day >= 5 && day <= 7)

  const openWeekHours = (hoursWeek && dayWeek)
  const openWeekEndHours = (hoursWeekEnd && dayWeekEnd)

  return (
    <div>
      {!(openWeekHours || openWeekEndHours) &&
        <Alert />
      }
    </div>
  )
}