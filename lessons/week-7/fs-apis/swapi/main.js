const getResidentsBtn = document.querySelector('#get-residents-button')

function buttonClicked(evt) {

    console.log('Button Clicked!')
}

getResidentsBtn.addEventListener(
    "click",
    buttonClicked
)

const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://swapi.dev/api/planets/2/',
  headers: { }
};

axios.request(config)
.then((response) => {
    let { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, residents, films, created, edited, url } = response
    for ( residentURL in residents ) {
        axios.request(residentURL)
        .then((innerResponse) => {
            let { name } = innerResponse
            const nameElement = document.createElement('h2');
            nameElement.textContent = name
            document.body.appendChild(name)
        })
    }
})
.catch((error) => {
  console.log(error);
});