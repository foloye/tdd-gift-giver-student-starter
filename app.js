const { BadRequestError } = require("./utils/errors");
const express = require('express')
const app = express();

var log = require('morgan')
app.use(log('tiny'))
app.use(express.json())

const router = require('./routes/gift-exchange')
app.use('/gift-exchange', router)

var bodyParser = require('body-parser');
const { restart } = require('nodemon');
const { NotFoundError } = require('./utils/errors');
app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/', (req, res) => {
    res.status(200).send({ "ping": "pong" })
})

app.use( (req,res,next) => {
  next();
  throw new NotFoundError
})
app.use((error, req, res, next) => {
  let status = error.status ? error.status : 500
  let message = error.message ?error.status : "Something wen't wrong in the applicatoin"
  res.send({error : {"status" : status, "message" : message}})
})


module.exports = app;