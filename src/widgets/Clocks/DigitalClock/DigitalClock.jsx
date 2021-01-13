import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

function DigitalClock() {
  const [time, setTime] = useState({
    hours: "",
    minutes: "",
    // seconds: "",
  });

  const { hours, minutes } = time;
  const {
    clockContainer,
    hoursContainer,
    minutesContainer,
    secondsContainer,
  } = styles;

  const date = new Date();
  useEffect(() => {
    setTime({
      hours: date.getHours(),
      minutes: date.getMinutes(),
    });
    return () => {};
  }, [date.getMinutes()]);
  return (
    <div class={clockContainer}>
      <div class={hoursContainer}>{hours}</div>
      <div class={minutesContainer}>{minutes}</div>
      {/* <div class={secondsContainer}>{seconds}</div> */}
    </div>
  );
}

export default DigitalClock;
