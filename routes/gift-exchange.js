const express = require('express')

const router = express.Router()

module.exports = router;

router.post('/pairs', (req, res) => {
    res.status(200).send({ "names": "gift" })
})
router.post('/traditional', (req, res) => {
    res.status(200).send({ "names": "gift" })
})