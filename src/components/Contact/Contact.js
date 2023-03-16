import React from 'react'
import {Element} from "react-scroll"
import {IconButton} from '@material-ui/core'
import {GitHub,Instagram,LinkedIn} from "@material-ui/icons"
import "./Contact.css";


const Contact = () => {
  return (
   <Element className="contact" name="Contact">
       <h1>Contact</h1>
         <div className="contact__container">

     
            <p>
                Gmail:<span>@ahamedirfani987@Gmail.com</span> 
            </p>
      

     <a href="https://www.hackerrank.com/ahamedirfani987">
         <p>
                HackerRank: <span>@ahamedirfani987</span> 
            </p>
            </a>

             <a href="https://www.facebook.com/ytrtirv57t7d88l?mibextid=ZbWKwL">
            <p>
                Facebook: <span>@ahamedirfan</span> 
            </p>
            </a>

           <div className="contact__icons">

            <a href="http://www.linkedin.com/in/ahamedIrfan-ai">
              <IconButton>
                 <LinkedIn />
              </IconButton>
            </a>

            <a href="https://github.com/ahamedirfanai">
              <IconButton>
                 <GitHub />
              </IconButton>
            </a>

            <a href="https://instagram.com/ahamedirfan_ai?igshid=YmMyMTA2M2Y=">
              <IconButton>
                 <Instagram />
              </IconButton>
            </a>
              </div>
           </div>
   </Element>
  );
};

export default Contact