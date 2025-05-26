import React, { useState } from 'react'
import axios from 'axios';
import { ClipLoader } from "react-spinners";

export default function Contact() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[message,setMessage]=useState("")
  const[loading,setLoading]=useState(false)

  const sendMail=async(e)=>{
      e.preventDefault();
      setLoading(true)
      try {
        const {data}= await axios.post("http://localhost:4000/send/mail",
          {
          name,
          email,
          message
        },
        {
          withCredentials:true,
          headers:{"Content-Type":"application/json"},
        }
      )
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.error(error.response.data.message)
      }
  }
  
  return (
    <section className='contact'>
      <form onSubmit={sendMail}>
          <h1>Contact Us</h1>
          <div>
            <label >Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  />
            <label >Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label >Message</label>
            <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} />
          </div>
          <button type='submit' disabled={loading} style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'15px'}}>
            {loading && < ClipLoader size={20} color='white'/>}
            Send Message
            </button>
      </form>
    </section >
  )
}
