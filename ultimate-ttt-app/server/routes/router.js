const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    userData = 
            {"id" : "Testing API Connection"
        }
    res.send(userData)
})

module.exports = router
