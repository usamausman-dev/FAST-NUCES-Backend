const user = (req, res) => {
    res.send("Hello I am " + req.body.name)
}

const all_users = (req, res) => {
    res.send("Hello I am " + req.body.name)
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

module.exports = { user, all_users, login }