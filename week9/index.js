

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

const json = href="/week9/towndata.json";

fetch(json)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }   
        throw new ERROR('Network response was not ok');
    })

    .then(function (jsonObject) {
            console.table(jsonObject);
            const city = jsonObject['towns'];

            for (let i = 0; i < city.length; i++) {
           

                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let image = document.createElement('img');
                let motto = document.createElement('h4');
                let year = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');

                h2.textContent = ' ' + city[i].name;
                card.appendChild(h2);
                motto.textContent = city[i].motto;
                card.appendChild(motto);
                year.textContent = 'Year Founded: ' + city[i].yearFounded;
                card.appendChild(year);
                population.textContent = 'Population: ' + city[i].currentPopulation;
                card.appendChild(population)
                rain.textContent = 'Anual Rain Fall: ' + city[i].averageRainfall;
                card.appendChild(rain);
                image.setAttribute('src', city[i].photo);
                image.setAttribute('alt', city[i].name + ' ' + city[i].townName + " - " + (i+1));
                card.appendChild(image);


                document.querySelector('.city').appendChild(card);
            }
            })

            .catch(function (error) {
                console.log('Fetch error: ', error.message);
            })
 