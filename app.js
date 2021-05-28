var david
const express = require('express')
const edad = 24
const app = express()
const adminRoutes = require('./routes/admin')
app.use(adminRoutes)
app.listen(3000)