const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.SERVER_PORT;



app.use(express.json())
app.get('/', (req, res) => {
    res.send("Hello I am " + req.body.name)

})

app.post('/login', (req, res) => {
    res.send('Hello I am LOGIN!')
})

app.put('/', (req, res) => {
    res.send('Hello I am PUT!')
})

app.delete('/', (req, res) => {
    res.send('Hello I am DELETE!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})