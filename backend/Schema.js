const mongoose = require('mongoose');
const Joi = require('joi');

// Define Mongoose schema
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
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// Create Mongoose model
const Scoop = mongoose.model("scoopdatas", scoopsSchema);
const User =  mongoose.model("userdatas", userSchema)


const userValidationSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});
// Joi validation schema
const scoopsValidationSchema = Joi.object({
    name: Joi.string().required(),
    ingredient: Joi.string().required(),
    origin: Joi.string().required(),
    rating: Joi.number(),
    image: Joi.string().required()
});

// Function to validate data using Joi schema
function validateScoop(scoop) {
    return scoopsValidationSchema.validate(scoop);
}
function validateSignup(user){
    return userValidationSchema.validate(user);
}
module.exports = { Scoop, validateScoop, validateSignup, User };
