import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const[signupData,setSignupData]=useState({})
    const navigate=useNavigate()

    const handleChange=(e)=>{
        setSignupData({...signupData,[e.target.name]:e.target.value})
    }

    const handleSubmit= async(e)=>{
      e.preventDefault();
        try {
            const res=await Registration(signupData)
            if(res.data.success){
              navigate("/login")
                setSignupData({})
            }
        } catch (error) {
            console.log(error);
            
        }
      

    }

  return (
   <div>
    <h1 style={{textAlign:"center" , fontSize:"25px"}}>Signup Here</h1>
    <form onSubmit={handleSubmit} style={{background:"cyan", color:"black",fontSize:"20px",width:"100%"}}>
  <div className="field">
    <label className="label">Name</label>
    <div className="control">
      <input className="input" type="text"style={{fontSize:"20px",color:"black",backgroundColor:"white", width:"90%"}} placeholder="enter name" name='name' onChange={handleChange} value={signupData.name} />
    </div>
  </div>
  <div className="field">
    <label className="label">Age</label>
    <div className="control">
      <input className="input" type="number" style={{fontSize:"20px",color:"black",backgroundColor:"white", width:"90%"}} placeholder="enter age" name='age' onChange={handleChange} value={signupData.age}  />
    </div>
  </div>
  <div className="field">
    <label className="label">Email</label>
    <div className="control ">
      <input className="input is-danger" type="email" style={{fontSize:"20px",color:"black",backgroundColor:"white", width:"90%"}} placeholder="Enter Your email" name='email' onChange={handleChange} value={signupData.email} />
  </div>
  </div>
     <div className="field">
    <label className="label">Password</label>
    <div className="control">
      <input className="input" type="password" style={{fontSize:"20px",color:"black",backgroundColor:"white", width:"90%"}} placeholder="enter Password" name='password' onChange={handleChange} value={signupData.password}  />
    </div>
  </div>
  <div className="field is-grouped">
    <div className="control">
      <button className="button is-link" type='submit'>Submit</button>
    </div>
  </div>
  </form>
</div>

  )
}
