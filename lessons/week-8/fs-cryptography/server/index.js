const express = require('express');
const cors = require('cors');

const app = express();

const { signup, login } = require('userControllerUnsecure')

app.use(express.json());
app.use(cors());

app.post('/signup', signup)
app.post('/login', login)

app.listen(4000, () => console.log(`running on port 4000`))