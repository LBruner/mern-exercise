const User = require('../models/userModel');

module.exports.renderAllUsers = async (req, res) => {
    try {
        const users = await User.find();
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
    const newUser = new User(req.body);
    await newUser.save();
    res.send('User added!')
}
