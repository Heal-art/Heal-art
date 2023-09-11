const currentDate = new Date();
function updateDayOfTheWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = currentDate.getUTCDay();
  const dayOfWeek = daysOfWeek[dayIndex];
  const dayElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  dayElement.textContent = dayOfWeek;
}

function updateUTCTime() {
  const utcTimeString = currentDate.toUTCString();
  const utcTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  utcTimeElement.textContent = utcTimeString;
}
updateDayOfTheWeek();
updateUTCTime();
