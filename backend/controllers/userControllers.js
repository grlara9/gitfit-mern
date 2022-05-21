const express = require('express')
const router = express.Router()

const loginUser = (req, res) => {
    res.json({message: 'login user'})

}

const registerUser = (req, res) => {
    res.json({message: 'user register'})
}

const getUser =(req, res) => {
    res.json({message: 'user selected'})
}

module.exports = {
    loginUser,
    registerUser,
    getUser
}