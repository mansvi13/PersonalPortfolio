import React from 'react';
import { Link } from 'react-scroll';
import "./NavBar.css";
import logo2 from "./logo2.png";


const NavBar = () =>{
    return(
      <>
       <div className="n-wrapper" id="NavBar">
      {/* left */}
      <div className="n-left">
        <div className="n-logo"> <img className= "n-avtar" src={logo2} alt ='Mansvi Dubey'/></div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link  to="Home" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="About" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="Experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="Projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="Contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
      </>
    );
   
};

export default NavBar;