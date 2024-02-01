// Getting the classes
let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatTime(time) {
  return time < 10 ? "0" + time : time; //23 45 -> 00 : 45 : 10
}

function updateClock() {
  const today = new Date();
  //console.log(today);
  let date = today.getDate();
  console.log(date);
  let day = weekDays[today.getDay()];
  let month = monthNames[today.getMonth()];

  //   console.log(day, month);
  //   console.log(today.getDay(), today.getMonth());
  let hours = formatTime(today.getHours());
  let minutes = formatTime(today.getMinutes());
  let seconds = formatTime(today.getSeconds());

  // to the UI
  dateContainer.innerHTML = ` <p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;
  //hoursContainer
  hoursContainer.textContent = hours + ":";
  minutesContainer.textContent = minutes + ":";
  secondsContainer.textContent = seconds + ":";
}

setInterval(updateClock, 1000);
