import React, { useEffect, useState } from "react";
import "./index.scss";
// import "./index.js";
import { DateTime } from "luxon";

export default function SimpleClock() {
  const [times, setTimes] = useState({
    day: "",
    hour: "",
    minute: "",
    second: "",
  });

  const handleClock = () => {
    const local = DateTime.local();

    setTimes({ ...local.c });
  };
  useEffect(() => {
    setInterval(() => handleClock(), 1000);
  }, []);
  return (
    <div>
      <div class="clock-container">
        <div class="clock-col">
          <p class="clock-day clock-timer">{times.day}</p>
          <p class="clock-label">Day</p>
        </div>
        <div class="clock-col">
          <p class="clock-hours clock-timer">{times.hour}</p>
          <p class="clock-label">Hours</p>
        </div>
        <div class="clock-col">
          <p class="clock-minutes clock-timer">{times.minute}</p>
          <p class="clock-label">Minutes</p>
        </div>
        <div class="clock-col">
          <p class="clock-seconds clock-timer">{times.second}</p>
          <p class="clock-label">Seconds</p>
        </div>
      </div>
    </div>
  );
}
