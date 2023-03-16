import React from 'react';
import {Link} from "react-scroll";     //I install react scroll it will scroll page when i click text
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
        <div className='header__left'>

          <h1>Mern Stack Develo<span>per</span></h1>

      </div>
      <div className="header__right">

        <Link to="about" smooth={true} duration={500}>    {/*link to it will nevigate about me*/}
            <h4>About Me</h4>                              {/*h4 is the content of the text*/}
            </Link> 

        <Link to="skills" smooth={true} duration={500}>
            <h4>Skills</h4>
            </Link> 

        <Link to="projects" smooth={true} duration={500}>
            <h4>Project</h4>
            </Link>

            <Link to="cer" smooth={true} duration={500}>
          <h4>Certificates</h4>
        </Link>


        <Link to="exp" smooth={true} duration={500}>
            <h4>Experience</h4>
            </Link>   

        
        <Link to="Contact"  className="header__rightButton" smooth={true} duration={500}>
            <h5>Contact Me</h5>
            </Link>   
        
   
      </div>
    </div>
  )
}

export default Header
