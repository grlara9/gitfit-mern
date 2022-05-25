const bcrypt = require('bcryptjs/dist/bcrypt');
const asyncHandler = require('express-async-handler')
const User =require('../models/userModel')
 
//since we are returning promises from mongoose database
const loginUser = asyncHandler(async(req, res) => {
    const {name, email, password } = req.body;

    if(!name || !email || !password){
        res.status(400)
        throw new Error("All fields must be fill out")
    }

    const userExits = await User.findOne({ email })

    if(userExits){
        res.status(400)
        throw new Error('Email already taken')
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

})

const registerUser = asyncHandler(async(req, res) => {
    res.json({message: 'user register'})
})

const getUser = asyncHandler( async(req, res) => {
    res.json({message: 'user selected'})
})

module.exports = {
    loginUser,
    registerUser,
    getUser
}