const asyncHandler = require('express-async-handler')
 
//since we are returning promises from mongoose database
const loginUser = asyncHandler(async(req, res) => {
    res.json({message: 'login user'})

})

const registerUser = async(req, res) => {
    res.json({message: 'user register'})
}

const getUser = async(req, res) => {
    res.json({message: 'user selected'})
}

module.exports = {
    loginUser,
    registerUser,
    getUser
}