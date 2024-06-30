
const test = (req,res) => {
    res.json('Test is working')
}

const registerUser = (req,res) => {
    try {
        const {name, email, password} = req.body
        
    } catch (error) {
        
    }
}

module.exports = { 
    test,
    registerUser
}