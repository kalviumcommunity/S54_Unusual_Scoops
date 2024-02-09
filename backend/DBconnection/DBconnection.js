const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const asyncHandler = require("express-async-handler")

const DBconnection = asyncHandler(async()=>{
    const connection = await mongoose.connect(process.env.MONGO_URI)
    // console.log("DB Connected") 
})

module.exports = DBconnection