const User = require('../models/userSchema')
const { hashPassword, comparePassword } = require('../helpers/auth')

const test = (req,res) => {
    res.json('Test is working')
}

const registerUser = async (req,res) => {
    try {
        const {name, email, password} = req.body

        // Check if name was entered
        if (!name){
            return res.json({
                error: 'Name is required'
            })
        }
        //Check if password is good
        if(!password || password.length<6){
            return res.json({
                error: 'Password is required and should be atleast 6 characters long'
            })
        }
        //Check email
        const exist = await User.findOne({email})
        if(exist){
            return res.json({
                error: 'Email already exists'
            })
        }

        const user = await User.create({
            name, email, password
        })

        return res.json(user)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = { 
    test,
    registerUser
}