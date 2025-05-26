import React, { useState } from 'react'
import { toast } from 'react-toastify'

function BmiCal() {
  const[height,setHeight]=useState("")
  const[weight,setWeight]=useState("")
  const[gender,setGender]=useState("")
  const[bmi,setBmi]=useState("")

  const calculatvalue=(e)=>{
      e.preventDefault();

      if(!height || !weight || !gender){
        toast.error("Please enter valid height ,weight and gender")
        return;
      }

      const heightInMeter=height/100;
      const bmiValue=(weight/(heightInMeter*heightInMeter)).toFixed(2);
      setBmi(bmiValue)
      if(bmiValue<18.5){
        toast.warning("You are under weight")
      }
      else if(bmiValue>=18.5 && bmiValue<24.9){
        toast.success("You have Normal weight")
      }
      else if(bmiValue>=24.9 && bmiValue<29.9){
        toast.warning("You are over weight")
      }else{
        toast.warning("You are in obese range,recomanded to please consult with a doctor")
      }
      
  }
  return (
    <section className='bmi'>
      <h1>BMI CALCULATOR</h1>
      <div className='container'>
        <div className="wrapper">
          <form onSubmit={calculatvalue}>
            <div>
            <label >Height(cm)</label>
            <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} />
            </div>
             <div>
            <label >Weight(kg)</label>
            <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} />
        </div>
        <div>
            <label >Gender</label>
            <select value={gender}onChange={(e)=>setGender(e.target.value)} >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
        </div>
        <button type='submit'>Calculate Your BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default BmiCal