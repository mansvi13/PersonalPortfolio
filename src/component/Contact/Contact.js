import React from 'react';
import  "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
const Contact = () => {
    return(
      <div className='c-wrapper'>
        <div className='c-contact'>
            <h1>Get in Touch with me...</h1>
        </div>
        <div className="c-contactIcons">
            <span>
                <a className="github" href = "https://github.com/mansvi13" target="blank" >
                <FaGithub size ='3rem'/>
                </a>
            </span>
            <span>
                <a className="LinkedIn" href = "https://www.linkedin.com/in/mansvi-dubey%E2%98%80%EF%B8%8F-837815158/" target="blank">
                <FaLinkedin size ='3rem'/>
                </a>
            </span>
            <span>
                <a className="Gmail" href = "mailto:mansidubey987@gmail.com" target="blank">
                <FaRegEnvelope size ='3rem'/>
                </a>
            </span>

        </div>

      </div>
    );
};
export default Contact;