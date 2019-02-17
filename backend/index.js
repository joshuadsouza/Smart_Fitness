const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/user_data', async (req, res) => {
    //Get the Variables from the App
    var email = req.body.email;
    var age = req.body.age;
    var weight = req.body.weight;
    var height = req.body.height;

    //Open a MySQL Connection
    var con = await mysql.createConnection({
        host:
    })

    //Write to the Database


})

app.post('/exercise', (req, res) => {
    res.send('Exercise Endpoint');
})

app.listen(port, () => console.log('Listening on port 3000.'))