/*
  Only the date & time in this widget are wired up to real data.
  Everything else (condition, temperature, forecast, sunrise/sunset,
  location) is still placeholder content — replace it by connecting
  a weather API (e.g. OpenWeatherMap, WeatherAPI) and updating the
  matching elements the same way this file updates #datetime.
*/

const datetimeEl = document.getElementById("datetime");

const weekdays = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

function updateDateTime() {

  const now = new Date();

  const weekday = weekdays[now.getDay()];

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");

  // 12-hour clock to match the widget's original "Tuesday, 11:56" style
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;

  datetimeEl.textContent = `${weekday}, ${hours}:${minutes} ${period}`;

}

updateDateTime();

// Re-check every second so the minute rolls over exactly on time
setInterval(updateDateTime, 1000);
