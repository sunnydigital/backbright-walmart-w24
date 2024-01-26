const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const pokemonBtn = document.querySelector("#pokemonButton")
const timeBtn = document.querySelector("#timeButton")
const dateBtn = document.querySelector("#dayOfWeekButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const fortune = res.fortune;
            alert(fortune)
        })
}

const getPokemon = () => {
    axios.get("http://localhost:4000/api/pokemon")
        .then(res => {
            const pokemon = res.pokemon;
            alert(pokemon)
        })
}

const getTime = () => {
    axios.get("http://localhost:4000/api/time")
        .then(res => {
            const time = res.time;
            alert(`The time is ${time}`)
        })
}

const getDayOfWeek = () => {
    axios.get("http://localhost:4000/api/date")
        .then(res => {
            const date = res.date;
            alert(`The date is ${date}`)
        })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
pokemonBtn.addEventListener('click', getPokemon)
timeBtn.addEventListener('click', getTime)
dateBtn.addEventListener('click', getDayOfWeek)