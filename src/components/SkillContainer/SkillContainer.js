import React from 'react';
import {Element} from 'react-scroll';
import skillImg from "../../assets/skillImg1.jpg";
import LinearProgress from '@material-ui/core/LinearProgress';
import "./SkillContainer.css";

const SkillContainer = () => {
  return (
    
    <Element className='skillContainer' name="skills">
        <div className='skillContainer__image'>
            <img src={skillImg} alt="image not loaded"/>
        </div>

        <div className='skillContainer__text'>
           <h2>SKILLSET</h2>
       
        <div className='skillContaier__skillSet'>
            <h5>React</h5>
        <div className='skillContainer__slider skillContainer__slider1'>   
           <LinearProgress variant="determinate" value={90} />
         </div>
     </div>

     <div className='skillContaier__skillSet'>
            <h5>Node JS</h5>
        <div className='skillContainer__slider skillContainer__slider2'>   
           <LinearProgress variant="determinate" value={80} />
         </div>
     </div>

     <div className='skillContaier__skillSet'>
            <h5>Mongo DB</h5>
        <div className='skillContainer__slider skillContainer__slider3'>   
           <LinearProgress variant="determinate" value={75} />
         </div>
     </div>

     <div className='skillContaier__skillSet'>
            <h5>Rest API</h5>
        <div className='skillContainer__slider skillContainer__slider4'>   
           <LinearProgress variant="determinate" value={65} />
         </div>
     </div>

     
     <div className='skillContaier__skillSet'>
            <h5>AWS</h5>
        <div className='skillContainer__slider skillContainer__slider5'>   
           <LinearProgress variant="determinate" value={60} />
         </div>
     </div>

       </div>


    </Element>
  );
};

export default SkillContainer