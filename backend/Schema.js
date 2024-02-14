const mongoose = require("mongoose");

const scoopsSchema = new mongoose.Schema({
    name: {
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

const Scoop = new mongoose.model("ScoopData", scoopsSchema)
module.exports = Scoop