

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
    let temp = 54;
    let wind = 12;
    let windChill = (wind * .07) - 54;
    document.chill.innerHTML(windChill);
};