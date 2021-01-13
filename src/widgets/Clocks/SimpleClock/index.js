import { DateTime } from "luxon";

document.addEventListener("DOMContentLoaded", () =>
  requestAnimationFrame(updateTime)
);

function updateTime() {
  const local = DateTime.local();
  //   console.log("time", DateTime.local().toFormat("dd"));
  const documentStyle = document.documentElement.style;
  const day = local.toFormat("dd").toString();
  const hours = local.toFormat("HH").toString();

  documentStyle.setProperty("--timer-day", "'" + day + "'");

  documentStyle.setProperty("--timer-hours", "'" + hours + "'");
  documentStyle.setProperty(
    "--timer-minutes",
    "'" + DateTime.local().toFormat("mm") + "'"
  );
  documentStyle.setProperty(
    "--timer-seconds",
    "'" + DateTime.local().toFormat("ss") + "'"
  );
  requestAnimationFrame(updateTime);
}
