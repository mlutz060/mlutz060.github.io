

function lastSave(){
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

function banner() {
    const d = new Date();
    let today = d.getDay();
    var pancake = document.querySelector(".pancake");

    if (today == 5){
        pancake.className += " friday";
    } else {
         pancake.className = "pancake";
    }
};


function windchill() {
    let chill = document.querySelector('.chill')
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);
    wc = Math.floor(wc);
    wc = (wc > temp)?temp:wc;
    wcTemp.innerHTML = wc;
    document.chill.innerHTML(windChill);
};


 // Calculate the Windchill
 function buildWC(speed, temp) {
    let wcTemp = document.getElementById('windchill');
   
    // Compute the windchill
    let temp = 54;
    speed = 12;
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);
   
    // Round the answer down to integer
    wc = Math.floor(wc);
   
    // If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;
   
    // Display the windchill
    console.log(wc);
    wc = wc+'°F';
    wcTemp.innerHTML = wc;
    }