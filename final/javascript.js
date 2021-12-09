function lastSave() {
    const toisoString = new Date(document.lastModified).toISOString();

    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long"
    };

    console.log(toisoString);
    const date = new Date(toisoString);
    const upDate = new Intl.DateTimeFormat("en-US", options).format(date);

    const lastModified = document.querySelector("#date");

    lastModified.innerHTML = "Last updated: " + upDate;
};

lastSave();

function toggleMenu() {
    var hamburger = document.querySelector("#mytopnav");
    if (hamburger.className === "topnav") {
        hamburger.className += " responsive";
    } else {
        hamburger.className = "topnav";
    }
    console.log("good")
};

const weatherurl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7b18f12494a8693ad4bbccaafa3bce14"

fetch(weatherurl)
    .then((response) => response.json())
    .then((jsObject) => {
        let currentTemp = jsObject.current.temp.toFixed(0);
        let condition = jsObject.current.weather[0].main;
        let humidity = jsObject.current.humidity;
        document.querySelector('#temp').innerText = currentTemp;
        document.querySelector('#condition').innerText = condition;
        document.querySelector('#humidity').innerText = humidity;

        let index = 1;
        let dayName = "Day";

        for (let i = 0; i < 3; i++) {
            let date = new Date(jsObject.daily[i].dt * 1000)
            let dayValue = date.getDay()
            switch(dayValue) {
                case 0: dayName = 'SUN'; break;
                case 1: dayName = 'MON'; break;
                case 2: dayName = 'TUE'; break;
                case 3: dayName = 'WED'; break;
                case 4: dayName = 'THU'; break;
                case 5: dayName = 'FRI'; break;
                case 6: dayName = 'SAT'; break;
                default: dayName = 'Error';
            }
            let dayId= 'forecast-day-' + index;
            document.getElementById(dayId).innerText = dayName;

            let tempValue = jsObject.daily[i].temp.day.toFixed(0);
            let temoID = 'forecast-temp-' +index;
            document.getElementById(tempID).innerText = tempValue +'F'
            index++;
        }
    });