import React from 'react'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Pricing() {
  const pricing=[
    {
      imgUrl:"/pricing.jpg",
      title:"QUARTERLY",
      Price:15000,
      length:3
    },
    {
      imgUrl:"/pricing.jpg",
      title:"HALF_YEARLY",
      Price:28000,
      length:6
    },
    {
      imgUrl:"/pricing.jpg",
      title:"YEARLY",
      Price:50000,
      length:12
    },
  ]
  return (
    <section className='pricing'>
      <h1>FITNESS MuLTYGIM PLANS</h1>
      <div className="wrapper">
        {
          pricing.map((item,index)=>{
            return(
              <div key={item.title} className='card'>
                <img src={item.imgUrl} alt={item.title} />
                <div className="title">
                  <h1>{item.title}</h1>
                  <h1>PACKEGS</h1>
                  <h3>RS {item.Price}</h3>

                  <p>for {item.length} months</p>                 
                </div>
                <div className="description">
                  <p><FaCheck/>Advanced Equipment</p>
                  <p><FaCheck/>All day Free Traning</p>
                  <p><FaCheck/>Free Rest Room(AC)</p>
                  <p><FaCheck/>24/7 Skilled Traniner</p>
                  <p><FaCheck/>20 Days Freezing Optaion</p>
                  <Link to={"/"}>Join Now</Link>
                </div>
              </div>
            )
          })
        }
      </div>
      
    </section>
  )
}

export default Pricing