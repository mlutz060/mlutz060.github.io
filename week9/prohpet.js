

fetch(json)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not ok');
    })

    .then(function (jsonObject) {
            console.table(jsonObject);
            const prophets = jsonObject['prophets'];

            for (let i = 0; i < prophets.length; i++) {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let birthDate = document.createElement('p');
                let birthPlace = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
                card.appendChild(h2);
                birthDate.textContent = "Place of Birth: " + prophets[i].birthplace;
                card.appendChild(birthPlace)
                birthDate.textContent = "Date of Birth: " + prophets[i].birthdate;
                card.appendChild(birthDate);
                image.setAttribute('src', prophets[i].imageurl);
                image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + " - " + (i+1));
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }
            })

            .catch(function (error) {
                console.log('Fetch error: ', error.message);
            })
 