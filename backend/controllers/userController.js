const User = require('../models/userModel');

module.exports.renderAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log(users)
        if (users)
            res.send(users)
        else {
            res.send('No users')
        }
    } catch (e) {
        res.status(400).json('Error: ' + e);
    }
}

module.exports.addUser = async (req,res) =>{
    console.log('Oi')
    const {username} = req.body.username;
    const newUser = new User({username});
    await newUser.save();
    res.send('User added!')
}
