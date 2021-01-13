import React from "react";
// import "./styles.css";

function SimpleClock() {
  return (
    <article class="clock">
      <div class="hours-container">
        <div class="hours"></div>
      </div>
      <div class="minutes-container">
        <div class="minutes"></div>
      </div>
      <div class="seconds-container">
        <div class="seconds"></div>
      </div>
    </article>
  );
}

export default SimpleClock;
