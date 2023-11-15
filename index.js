const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.SERVER_PORT;

const user_route = require('./router/users')
const product_route = require('./router/products')

//MIDDLEWARE
app.use(express.json())

//API ROUTES
app.use('/api', user_route)
app.use('/api', product_route)


app.listen(port, () => console.log(`Example app listening on port ${port}`))