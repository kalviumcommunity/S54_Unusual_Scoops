const mongoose = require("mongoose");

const scoopsSchema = new mongoose.Schema({
    Flavour: {
        type: String,
        required: true,
    },
    Ingredient: {
        type: String,
        required: true,
    },
    Origin: {
        type: String,
        required: true,
    },
    Rating: {
        type: Number,
    },
    image: {
        type: String,
        required: true
    },
})

const Scoop = new mongoose.model("scoopdatas", scoopsSchema)
module.exports = Scoop 