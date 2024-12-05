require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/request', require('./controllers/request'))

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})