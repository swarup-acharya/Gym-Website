require('dotenv').config()

const express=require("express");
const cors=require("cors");
const router = require('./router/router');
const app=express();

app.use(express.json());
app.use(router)
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods: "GET,POST,PUT,DELETE", 
    credentials:true,
    allowedHeaders: "Content-Type,Authorization",
}))

app.use(express.urlencoded({extended:true}))


const PORT=process.env.SERVER_PORT;
app.listen(PORT,()=>{
    console.log(`your server is running on http://localhost:${PORT}/`);
    
})