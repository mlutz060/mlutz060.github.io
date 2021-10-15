
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
}