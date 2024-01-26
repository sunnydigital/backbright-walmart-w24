module.exports = {

    getCompliment : (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune : (req, res) => {
        const fortunes = [
            "A friend is a present you give yourself.",
            "You are modest and courteous.",
            "You are busy, but you are happy.",
            "A hunch is creativity trying to tell you something.",
            "A golden egg of opportunity falls into your lap this month.",
            "A fresh start will put you on your way."
        ]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    getPokemon : (req, res) => {
        const pokemon = [
            "Charizard",
            "Pikachu",
            "Rayquaza",
            "Groudon",
            "Kyogre",
            "Dialga",
            "Palkia",
            "Giratina",
            "Arceus",
            "Lucario",
            "Milotic"
        ]

        let randomIndex = Math.floor(Math.random() * pokemon.length)
        let randomPokemon = pokemon[randomIndex]

        res.status(200).send(randomPokemon)
    },

    getTime : (req, res) => {
        const d = new Date()
        let time = d.getTime()

        res.status(200).send(time)
    },

    getDayOfWeek : (req, res) => {
        const d = new Date()
        let day = d.getDay()

        dayOfTheWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]
        res.status(200).send(dayOfTheWeek[day])
    }
}