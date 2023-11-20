const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    profile_pic: { type: String, default: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png" },
    joining: { type: Date, default: Date.now }

})

const User = model('user', UserSchema)
module.exports = User