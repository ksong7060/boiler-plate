const express = require('express')
const app = express()
const port = 5000

const mongoose = require('./db.js')

app.get('/', (req,res) => res.send('Hello World! ~~ Hi, I am Daniel Song'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))