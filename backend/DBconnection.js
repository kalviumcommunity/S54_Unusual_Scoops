const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DBconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

module.exports = DBconnection;
