const Joi =require("joi")
const RegSchema=Joi.object({
    name:Joi.string().max(20).min(3),
    age:Joi.number().max(150).min(5),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password:Joi.string().min(8).max(100).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})
module.exports=RegSchema;