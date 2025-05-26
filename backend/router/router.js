const express=require('express');
const router=express.Router();
const { sendEmail } = require('../utils/sendEmail');

// router.route('/get').get((req,res)=>{
//     try {
//         if(req){
//             res.status(201).json({message:'you get the frfist data'})
//         }
//     } catch (error) {
//         console.log(error);
        
//     }
// })

router.route("/send/mail").post( async (req,res)=>{
  
     const {name,email,message}=req.body;
     if(!name || !email || !message){
        res.status(400).json({message:"Please Provide All the details",success:false})
     }
   try {
    if(req.body){
         await sendEmail({
        email:"swarupacharya8926@gmail.com",
        subject:'GYM WEBSITE CONTACT',
        message:message,
        userEmail:email,
    })
    res.status(200).json({success:true,message:"Message send successfuly"})
    }
   
   } catch (error) {
    res.status(500).json({
        success:false,
        message:"internal server error"
    })
   }

});


    router.route("/reg").post(
        async (req,res) => {
    try {
        if(req.body){
            const isUserExit=await User.findOne({email:req.body.email});
        
        if(isUserExit){
            res.status(400).json({message:"user already exists",data:[],success:false})
        }else{
            const {name,age,email,password}=req.body;
            const hashPassword= await bcrypt.hash(password,10)
            // const user = new User(req.body) before use of bcrypt for password hashing and salting
            const user =new User({name,age,email,password:hashPassword})
            const isReg= await user.save()
            if(isReg){
                 res.status(200).json({message:"user register succesfully",data:user,success:true})
            }
           
        }
    }
    } catch (error) {
        res.status(500).json({message:"user Registratin failed",data:error})
        
    }
}
);
    

module.exports=router;