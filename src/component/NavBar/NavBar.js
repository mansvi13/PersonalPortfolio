import React from 'react';
import { Link } from "react-scroll";
import "./NavBar.css";
const navbar = () =>{
    return(
        <div className="n-wrapper" id="NavBar">
            { /* left */}
            <div className="n-left">
                <div className='n-name'>Mansvi Dubey</div>
            </div>
            {/* right */ }
            <div className="n-right">
            <div className="n-list">
            <ul style={{ listStyleType:"none"}}>
            <li>
              <Link activeClass="active" to="NavBar" spy={true} smooth={true}>
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
              <Link to="Project" spy={true} smooth={true}>
                Project
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

    );
};

export default navbar;