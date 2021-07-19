const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRoutes = require("../routes/userRoutes.js");
const User = require('../models/userModels')

exports.signup = async(req, res, next) => {
    try {
    let {id, firstName, Lastname, email, password} = req.body;
    password = await bcrypt.hash(password, 12);

    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

const newUser = {id, firstName, Lastname,email, password}
User.push(newUser)
    res.status(201).json({status: "success", token, newUser});
    }
    catch(err) {
    
        res.status(400).json({status: "fail",
    err: err});
    console.log(err)
    }



next();
}
