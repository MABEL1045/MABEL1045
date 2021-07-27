const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

// const token = jwt.sign({_id: User._id}, process.env.TOKEN_SECRET);
// res.header('auth-token', token).send(token);


async function auth(req, res, next) {
    let token = req.header.authorization;
    try {
    let verifyUser = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(verifyUser.id)
    console.log(user)
    req.user = user
    next()
} catch (error) {
    console.log(error)
    res.json({
        status: "failed",
        msg: "Access Denied, please login"
    })
}
}

module.exports = auth;