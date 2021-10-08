const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

function toggleMenu() {
    var hamburger = document.querySelector("#myTopnav");
    if (hamburger.className === "topnav") {
        hamburger.className += " responsive";
    } else {
        hamburger.className = "topnav";
    }
}