const express = require("express");
const DBconnection = require("./DBconnection/DBconnection");
const app = express()
const { connection, default: mongoose } = require("mongoose")
const port = process.env.PORT || 3000;
const dotenv = require('dotenv').config()

DBconnection()

app.get("/",(req,res)=>{
    res.send(mongoose.connection.readyState === 1 ? "Database Connnected " : "Database Disonnected ")
})

app.get('/ping', (req,res)=>{
    res.send("pong")
})
app.listen(port,()=>{
    console.log(`The server is running on ${port}`)
})