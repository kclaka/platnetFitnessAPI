const express = require('express')
const dotenv = require('dotenv')

const fs = require('fs');
// Route files 
const customers = require("./Routes/Customers")
const inventory = require("./Routes/Inventory")
const transaction = require("./Routes/Transactions")
const schedules = require("./Routes/Schedule")
const trainers = require("./Routes/Trainers")
const locations = require("./Routes/locations")
const equipment = require("./Routes/Equipment")

dotenv.config({path: './config/config.env'})


//connectDB()

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())
//Mount Routers
app.use('/api/customers', customers)
app.use('/api/inventory', inventory)
app.use('/api/transactions', transaction)
app.use('/api/schedules', schedules)
app.use('/api/trainers', trainers)
app.use('/api/locations', locations)
app.use('/api/equipment', equipment)

const PORT = process.env.PORT




app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`))

