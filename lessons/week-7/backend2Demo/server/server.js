// Import packages
const express = require('express');
const cors = require('cors')

const usersDB = require('./users.json')

const app = express()

// Middleware
appendFile
app.use(express,json())
app.use(cors)

app.post('/createNewUser', (req, res) => {
    console.log(req.body)
    const { username, firstName, lastName, age } = req.body
    
    if(!username || !firstName || !lastName) {
        res.status(400).send('FOrms cannot be empty');
    }

    let newUser = {
        userName: username,
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    res.status(200).send(`Welcome new User ${firstName}`)
})

app.put('/updateUser/:name', (req, res) => {
    const { name } = req.params;
    const { username } = req.body;

    if (!username) {
        res.status(400).send('User not found');
        return
    }

    const userToBeUpdated = usersDB.filter(el => el.username = name)

    userToBeUpdated[0].username = username;

    res.status(200).send('Successfully updated user')
})

app.delete('deletedUser/:username', (req, res) => {
    const { username } = req.params;

    usersDB.filter((el, index) => {
        if( el.username === username) {
            Array.splice(index, 1)
        }
        res.status(200).send('Successfully deleted user');
        return
    })

    res.status(400).send('User not found')
})

app.listen(4001, () => console.log("Listening on port 4001"))