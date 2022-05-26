const bcrypt = require('bcryptjs/dist/bcrypt');
const asyncHandler = require('express-async-handler')
const User =require('../models/userModel')
 
//since we are returning promises from mongoose database
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password } = req.body;

    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if(!name || !email || !password){
        res.status(400)
        throw new Error("All fields must be fill out")
    }

    if(!emailRegex.test(email)){
        res.status(400)
        throw new Error('Invalid email formar')
    }

    const userExits = await User.findOne({ email })

    if(userExits){
        res.status(400)
        throw new Error('Email already taken')
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name, 
        email,
        password: hashPassword
    })

    if(user){

    }
})

const loginUser = asyncHandler(async(req, res) => {
    res.json({message: 'user '})
})

const getUser = asyncHandler( async(req, res) => {
    res.json({message: 'user selected'})
})

module.exports = {
    loginUser,
    registerUser,
    getUser
}