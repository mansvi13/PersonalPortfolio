import React from 'react';
import  "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import avtar from "./avtar.png"
const Contact = () => {
    return(
      <div className='c-wrapper' id= 'Contact'>
        <div className='c-contact'>
            <h1 className='c-text'>If you are HR or have any good opportunity.<br/>Please Contact me,my mailbox is always<br/> open or give me shout on social media... </h1>
        </div>
        <div className="c-contactIcons">
            <span>
                <a className="github" href = "https://github.com/mansvi13" target="blank" >
                <FaGithub size ='2rem'/>
                </a>
            </span>
            <span>
                <a className="LinkedIn" href = "https://www.linkedin.com/in/mansvi-dubey%E2%98%80%EF%B8%8F-837815158/" target="blank">
                <FaLinkedin size ='2rem'/>
                </a>
            </span>
            <span>
                <a className="Gmail" href = "mailto:mansidubey987@gmail.com" target="blank">
                <FaRegEnvelope color = 'Indigo'size ='2rem'/>
                </a>
            </span>
            <div className='c-right'><img className='c-avtar' src ={avtar} alt ='Mansvi Dubey'/></div>
            <div className='c-end'><strong>Don't be a stranger!!</strong></div>
        </div>

      </div>
    );
};
export default Contact;