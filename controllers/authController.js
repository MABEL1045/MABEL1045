const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRoutes = require("../routes/userRoutes.js");
const User = require('../models/userModels')


exports.getAllUser = async(req, res, next) => {;
try {
const users = await User.find({});
res.json({
    status: "success",
    data: users
});
} catch(error) {
    console.log(error)
}
next();
}


exports.signup = async(req, res, next) => {
    try {
    let { firstName, lastName, email, password} = req.body


    // validation
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
        return res.json({
            status: "failed",
            msg: "email already exist"
        })
    }

    // password hashing
    password = await bcrypt.hash(password, 12);

    const newUser = {firstName, lastName, email, password}
    const createUser = await User.create(newUser);
    console.log(createUser)
    
    const id = createUser._id;
    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: `${process.env.JWT_EXPIRES_IN}`
    });


    res.status(201).json({status: "success", token, newUser});
    }
    catch(err) {
    
        res.status(400).json({status: "fail",
    err: err});
    console.log(err)
    }

next();
}
