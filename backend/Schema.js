const mongoose = require("mongoose");

const scoopsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredient: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
    },
    image: {
        type: String,
        required: true
    },
})

const Scoop = new mongoose.model("scoopdatas", scoopsSchema)
module.exports = Scoop 