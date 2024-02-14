const joi = require("joi");

const validation=joi.object({
    title:joi.string().min(5).max(30).required(),
    image:joi.string().required(),
    rating:joi.number().integer().min(0).max(10).required(),
})

module.exports=validation