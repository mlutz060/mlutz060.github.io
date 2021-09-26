//let date = newDate();
const year = document.getElementById("currentYear")
const date = document.getElementById("currentDate")

let todayDate = new Date();

year.innerHTML = todayDate.getFullYear();

date.innerHTML = `${todayDate.getMonth()}/${todayDate.getDate()}/${todayDate.getFullYear()} ${todayDate.toLocaleTimeString()}`;