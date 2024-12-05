const router = require('express').Router()
const db = require("../models")

const { Request } = db

router.post('/', async (req, res) => {
    const request = await Request.create(req.body)
    res.json(request)
    console.log('Your request was submitted')
})

module.exports = router