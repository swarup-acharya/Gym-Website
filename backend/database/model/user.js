const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    name:String,
    age:Number,
    // email:String,  for CRUD
    email:{
        type:String,
        unique:true,
        required:true
    }, 
    // password:String, for CRUD
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:100
    },
    
},
{
    timestamps:true
})
module.exports = mongoose.model('user',userSchema)
