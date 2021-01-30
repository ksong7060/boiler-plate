const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser");
const mongoose = require('./db.js')
const { User } = require("./models/User");

// application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application / json
app.use(bodyParser.json());

app.get('/', (req,res) => res.send('Hello World! ~~ Hi, I am Daniel Song ^^;;'))

app.post('/register', (req,res) => {
    // necessary information from client to put them into database

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))