// Import packages
const express = require('express');
const cors = require('cors');

const usersDB = require('./users.JSON')
const usersCtlr = require('./controllers/usersController');

const app = express()

// middleware
app.use(express.json());
app.use(cors);



// ROUTES

app.get("/allUsers", usersCtlr.getAllUsers);

app.post('/createNewUser', usersCtlr.createNewUser);

app.put('/updateUser/:name', usersCtlr.updateUser);

app.delete('/deleteUser/:username', usersCtlr.deleteUser)


app.listen(4001, () => console.log("Listening on port 4001"));
