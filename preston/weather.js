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

//Shows friday pancake breakfast popup
function advertise() {
    const day = new Date();
    const weekday = day.getDay();
    advertisement = document.querySelector(".pancake");
    if (weekday == 5) {
        advertisement.className += " friday";
    }
};

advertise();

//hides 5 day forecast when in mobile screen
function forecast() {
    var predict = document.querySelector("#forecast");
    if (predict.className === "forecast") {
        predict.className += " mobile";
    } else {
        predict.className = "forecast";
    };
};

//Alert users that JavaScipt is needed to improve the page 
//alert("JavaScript is needed to enhance features of the page!")