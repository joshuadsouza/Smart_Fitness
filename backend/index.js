const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
var dateTime = require('node-datetime');
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
require('dotenv').config()

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/user_data', async (req, res) => {
    //Get the Variables from the App
    var email = req.body.email;
    var age = Number(req.body.age);
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    var package = [[email, age, weight, height, formatted]]

    //Open a MySQL Connection
    var connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    })

    //Connect to the Database
    await connection.connect(function(err){
        if (err) throw err;
    });

    //Insert into the Database
    var sql = "INSERT INTO user(email, age, weight, height, date_and_time) VALUES ?";
    await connection.query(sql, [package], function(err, result){
        if (err) throw err;
    });

    //End Connection and Print for Record
    await connection.end();
    console.log('User Success');

    //Send a Response
    res.send("Thank you");
})

app.post('/exercise', async (req, res) => {
     //Get the Variables from the App
     var exercise = req.body.exercise;
     var sets = Number(req.body.sets);
     var reps = Number(req.body.reps);
     var weight = Number(req.body.weight);
     var dt = dateTime.create();
     var formatted = dt.format('Y-m-d H:M:S');
     var package = [[exercise, sets, reps, weight, formatted]]

     //Open a MySQL Connection
     var connection = await mysql.createConnection({
         host: process.env.DB_HOST,
         database: process.env.DB_DATABASE,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD
     })
 
     //Connect to the Database
     await connection.connect(function(err){
         if (err) throw err;
     });
 
     //Insert into the Database
     var sql = "INSERT INTO exercise(exercise, sets, reps, weight, date_and_time) VALUES ?";
     await connection.query(sql, [package], function(err, result){
         if (err) throw err;
     });
 
     //End Connection and Print for Record
     await connection.end();
     console.log('Exercise Success');
 
     //Send a Response
     res.send('Thank you!');
})

app.listen(port, () => console.log('Listening on port 3000.'))