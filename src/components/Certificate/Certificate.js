import React, { useState } from 'react'
import './Certificate.css';

const Certificate = ({img, title,desc}) => {
   const [show, setShow] = useState(false);
  return (
  
    
    <div className="Certificate"
             onMouseEnter={()=> setShow(true)}
             onMouseLeave={()=> setShow(false)}>

            {
                show ? (
                    <div className="Certificate__content">
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ) : (
                    <img src={img} alt="" />
                )
                }


            </div>
       
  );
};

export default Certificate