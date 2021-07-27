const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema  = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})



// const User = [
// {

//     id: "1",
//     firstName: "John",
//     lastName: "Adams",
//     email: "john@gmail.com", 
//     password: "txt1234"

// },
// {
//     id: "1",
//     firstName: "Peter",
//     lastName: "Okon",
//     email: "peter@gmail.com",
//     password: "test456"
// }
// ]

const User = mongoose.model("User", userSchema)

module.exports = User;