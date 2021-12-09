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

    const lastModified = document.getElementById("date");

    lastModified.innerText = "Last updated: " + upDate;
};

lastSave();


//the event listener is onclick in the HTML

function toggleMenu() {
    var hamburger = document.querySelector("#myTopnav");
    if (hamburger.className === "topnav") {
        hamburger.className += " responsive";
    } else {
        hamburger.className = "topnav";
    }
};

const apiKey = '7b18f12494a8693ad4bbccaafa3bce14';

const current = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7b18f12494a8693ad4bbccaafa3bce14';
const fiveDay = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7b18f12494a8693ad4bbccaafa3bce14';

fetch(current)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not okay');
    })
    .then(function (jsonObject) {
        console.log(jsonObject);
        document.querySelector('#current').innerHTML = 'Currently: ' + jsonObject.main.temp + '&deg;F';
        document.querySelector('#high').innerHTML = 'High: ' + jsonObject.main.temp_max + '&deg;F';
        document.querySelector('#windchill').innerHTML = 'Wind Chill: ' + jsonObject.main.feels_like + '&deg;F';
        document.querySelector('#humidity').innerHTML = 'Humidity: ' + jsonObject.main.humidity;
        document.querySelector('#windspeed').innerHTML = 'Windspeed: ' + jsonObject.main.wind.speed;


        let iconPath = "https://openweathermap.org/weather-conditions"

    });

fetch(fiveDay)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not okay');
    })
    .then(data =>{
        console.log(data);
        var dayIndex = new Date().getDay() + 1;
        var weekdayForecast = new Array(
            "Sun",
            "Mon",
            "Tues",
            "Wed",
            "Thurs",
            "Fri",
            "Sat",
        );
        var forecastIndex = 6;
        for (i=0; i<5; i++){
            

            let dayForcast = weekdayForecast[dayIndex]
            let forecast = document.querySelector("#forecast")
            
        }
    }
        // for (let i = 0; i< jsonObject.list.length; i++){
        //     let date = new Date(jsonObject.list[i].dt_text);
        //     console.log(date.getTime());
        //     if (date.getTime() == 18: 00: 00)
        // document.querySelector('#wed').innerHTML = +jsonObject.list[0].main.temp + '&deg;F'
        // document.querySelector('#thu').innerHTML = +jsonObject.list[8].main.temp + '&deg;F'
        // document.querySelector('#fri').innerHTML = +jsonObject.list[12].main.temp + '&deg;F'
        // document.quer)ySelector('#sat').innerHTML = +jsonObject.list[20].main.temp + '&deg;F'
        // document.querySelector('#sun').innerHTML = +jsonObject.list[24].main.temp + '&deg;F'
        // }
        let iconPath = "https://openweathermap.org/weather-conditions"
    })
    .catch(err => {
        console.log(err);
    });

main[0]