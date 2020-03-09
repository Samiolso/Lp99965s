import React from "react";
import { Alert } from "./alert"


export const HodinyAlert = () => {
  const hours = new Date().getHours()

  const hoursWeek = (hours >= 10 && hours <= 21)

  return (
    <div>
      {!hoursWeek &&
        <Alert />
      }
    </div>
  )
}