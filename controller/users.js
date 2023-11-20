require('dotenv').config()
const { connect } = require('mongoose')
const UserSchema = require('../schema/users')
const { hash } = require('bcryptjs')

const signup = async (req, res) => {
    const { username, email, password, gender } = req.body;

    if (username && email && password && gender) {
        try {
            await connect(process.env.MONGO_URI)
            // const checkUser = await UserSchema.findOne({ email })
            const checkUser = await UserSchema.exists({ email })
            if (!checkUser) {
                await UserSchema.create({ username, email, gender, password: await hash(password, 16) })
                res.status(201).json({ message: "User Created Successfully" })
            }

            else {
                res.json({
                    message: "user already Exists"
                })
            }
        }

        catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }

    else {
        res.status(403).json({
            message: "Required Field Missing"
        })
    }
}

const user = (req, res) => {
    res.send("Hello I am " + req.body.username)
}



const login = (req, res) => {
    const { email, password } = req.body
    const db = { email: 'uusman004@gmail.com', password: 'hello123@' }

    if (email == db.email && password == db.password) {
        res.send("Successfully Login")
    }

    else {
        res.status(404).send("Incoorect credentials")
    }
}

const userByEmail = async (req, res) => {
    const { email } = req.query;

    try {
        const db = await connect(process.env.MONGO_URI)
        const user = await UserSchema.findOne({ email: email })
        res.json({ user })

    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const all_users = async (req, res) => {
    try {
        const db = await connect(process.env.MONGO_URI)
        const all_users = await UserSchema.find()
        res.status(201).json({ users: all_users })

    } catch (error) {
        res.status(400).send(error.message)
    }
}

const userByID = async (req, res) => {
    const { id } = req.params;

    try {
        const db = await connect(process.env.MONGO_URI)
        const user = await UserSchema.findOne({ _id: id })
        res.json({ user })

    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}


module.exports = { user, all_users, login, signup, userByEmail, userByID }