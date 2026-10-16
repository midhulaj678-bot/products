const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const userSchema  = new mongoose.Schema({
     username: String,
    password: String,
    email: String,
    mob: String
})
