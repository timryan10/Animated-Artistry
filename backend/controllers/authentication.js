const router = require('express').Router();
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token');

const { User } = db

router.get('/authentication', async(req, res) =>{
    res.json(req.currentUser)
    try {
        const [authenticationMethod, token] = req.headers.authorization.split('')

        if(authenticationMethod == 'Bearer') {
            const result = await jwt.decode(process.env.JWT_SECRET, token)
        
            const { id } = result.value

            let user = await User.findOne({
                where: {
                    userId: id
                }
            })
        }
    }
    catch(error) {
        res.json(null)
    }
})

module.exports = router