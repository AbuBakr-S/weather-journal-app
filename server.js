// Setup empty JS object to act as endpoint for all routes
projectData = {}

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialise the main project folder
app.use(express.static('website'));


// Setup server
const port = 8000;
app.listen(port, () => { console.log(`Running on localhost: ${port}`) } );


// GET route that returns the projectData object
app.get('/', (req, res) => {
    res.send(projectData);
});

// POST route that adds incoming data to projectData
app.post('/addWeather', getWeather);

function getWeather (req, res){

    console.log(req.body);

    newEntry = {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.city
    }
    
    projectData.push(newEntry);
    res.send(projectData);
    console.log(projectData);
}