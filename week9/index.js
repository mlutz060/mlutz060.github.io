const requestURL = "";

fetch(requestURL)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not ok');
    })

    .then(function (jsonObject) {
            console.table(jsonObject);
            const city = jsonObject['city'];

            for (let i = 0; i < city.length; i++) {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let birthDate = document.createElement('p');
                let birthPlace = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = city[i].name + ' ' + city[i].lastname;
                card.appendChild(h2);
                birthDate.textContent = "Place of Birth: " + city[i].birthplace;
                card.appendChild(birthPlace)
                birthDate.textContent = "Date of Birth: " + city[i].birthdate;
                card.appendChild(birthDate);
                image.setAttribute('src', city[i].imageurl);
                image.setAttribute('alt', city[i].name + ' ' + city[i].lastname + " - " + (i+1));
                card.appendChild(image);

                document.querySelector('div.city').appendChild(card);
            }
            })

            .catch(function (error) {
                console.log('Fetch error: ', error.message);
            })
 