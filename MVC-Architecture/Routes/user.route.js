// #######################################
// #######################################
// #######################################

const express = require('express')
const { postUser, getUser } = require('../Controllers/User.contorller')

const route = express.Router()



route.get("/", getUser)

route.post('/user', postUser)

module.exports = route