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
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            
          })
        } else {
          res.status(400)
          throw new Error('Invalid user data')
        }
    })

const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body

    // Check for user email
    const user = await User.findOne({ email })
  
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
       
      })
    } else {
      res.status(400)
      throw new Error('email and password don\'t match')
    }
  })

const getUser = asyncHandler( async(req, res) => {
    res.status(200).json(req.user)
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  }

module.exports = {
    loginUser,
    registerUser,
    getUser
}