const joi=require("joi");

const validation=joi.object({
    title:joi.string().min(8).max(30).required(),
    image:joi.string().required(),
    failRating:joi.number().integer().min(0).max(10).required(),
})

module.exports=validation