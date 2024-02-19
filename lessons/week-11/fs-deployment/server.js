const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
/*
__dirname: This is sort of like inserting the result of running pwd in your command line – it finds
the full path of your server file. This is useful for running your server in multiple
places (like your local computer and your deployment server) since the absolute path
will change based on what system you’re on.

This code will look for static files (e.g. HTML, CSS) in a folder called "public"
*/
app.use(cors())
app.use(express.static(`${__dirname}/public`));



app.get('/api/cat', (req, res) => res.send('Smelly cat'))

app.listen(4000, () => console.log(`server running on 4000`))
