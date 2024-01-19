// Import Packages
const express = require('express');
const cors = require('cors')

const housesDB = require('./users.json')
const housesCtlr = require('./controllers/usersController');

const app = express()

// Middleware

// ROUTES

app.get('/getHouses', housesCtlr.getHouses)

app.post('/createHouse', housesCtlr.createHouse)

app.put('/updateHouse/:house', housesCtlr.updateHouse)

app.delete('/deleteHouse/:house', houesCtlr.deleteHouse)

app.listen(4001, () => console.log("Listening on port 4001"))