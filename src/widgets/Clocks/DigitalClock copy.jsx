// import React from "react";

// function DigitalClock() {
//   var hoursContainer = document.querySelector(".hours");
//   var minutesContainer = document.querySelector(".minutes");
//   var secondsContainer = document.querySelector(".seconds");

//   var last = new Date(0);
//   last.setUTCHours(-1);

//   var tickState = true;

//   var tickElements = Array.from(document.querySelectorAll(".tick"));

//   const updateTime = () => {
//     var now = new Date();

//     var lastHours = last.getHours().toString();
//     var nowHours = now.getHours().toString();
//     if (lastHours !== nowHours) {
//       updateContainer(hoursContainer, nowHours);
//     }

//     var lastMinutes = last.getMinutes().toString();
//     var nowMinutes = now.getMinutes().toString();
//     if (lastMinutes !== nowMinutes) {
//       updateContainer(minutesContainer, nowMinutes);
//     }

//     var lastSeconds = last.getSeconds().toString();
//     var nowSeconds = now.getSeconds().toString();
//     if (lastSeconds !== nowSeconds) {
//       //tick()
//       updateContainer(secondsContainer, nowSeconds);
//     }

//     last = now;
//   };

//   const tick = () => {
//     tickElements.forEach((t) => t.classList.toggle("tick-hidden"));
//   };

//   const updateContainer = (container, newTime) => {
//     var time = newTime.split("");

//     if (time.length === 1) {
//       time.unshift("0");
//     }

//     var first = container.firstElementChild;
//     if (first.lastElementChild.textContent !== time[0]) {
//       updateNumber(first, time[0]);
//     }

//     var last = container.lastElementChild;
//     if (last.lastElementChild.textContent !== time[1]) {
//       updateNumber(last, time[1]);
//     }
//   };

//   const updateNumber = (element, number) => {
//     //element.lastElementChild.textContent = number
//     var second = element.lastElementChild.cloneNode(true);
//     second.textContent = number;

//     element.appendChild(second);
//     element.classList.add("move");

//     setTimeout(function () {
//       element.classList.remove("move");
//     }, 990);
//     setTimeout(function () {
//       element.removeChild(element.firstElementChild);
//     }, 990);
//   };

//   setInterval(updateTime, 100);

//   return (
//     <div class="clock">
//       <div class="hours">
//         <div class="first">
//           <div class="number">0</div>
//         </div>
//         <div class="second">
//           <div class="number">0</div>
//         </div>
//       </div>
//       <div class="tick">:</div>
//       <div class="minutes">
//         <div class="first">
//           <div class="number">0</div>
//         </div>
//         <div class="second">
//           <div class="number">0</div>
//         </div>
//       </div>
//       <div class="tick">:</div>
//       <div class="seconds">
//         <div class="first">
//           <div class="number">0</div>
//         </div>
//         <div class="second infinite">
//           <div class="number">0</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DigitalClock;
