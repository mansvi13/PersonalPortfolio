import React from 'react';
import  "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import avtar from "./avtar.png"
const Contact = () => {
    return(
      <div className='c-wrapper' id= 'Contact'>
        <h1 id='c-heading'>Get in Touch...</h1>
        <div className='c-contact'>    
            <span className='c-text'>I am eagerly seeking new and exciting career opportunities, and I would be thrilled to hear from you if you know of any openings that align with<br/> my skills and experience. My mailbox is always open, and I encourage you to connect with me on social media as well.Don't hesitate to reach out <br/>I'm ready to make my mark and take on the next challenge! 
            </span>
        </div>
        <div className="c-contactIcons">
            <span>
                <a className="github" href = "https://github.com/mansvi13" target="blank" >
                <FaGithub color = 'white' size ='2rem' />
                </a>
            </span>
            <span>
                <a className="LinkedIn" href = "https://www.linkedin.com/in/mansvi-dubey%E2%98%80%EF%B8%8F-837815158/" target="blank">
                < FaLinkedinIn color = 'white' size ='2rem'/>
                </a>
            </span>
            <span>
                <a className="Gmail" href = "mailto:mansidubey987@gmail.com" target="blank">
                <FaRegEnvelope color = 'white'size ='2rem'/>
                </a>
            </span>
            <div className='c-right'><img className='c-avtar' src ={avtar} alt ='Mansvi Dubey'/></div>
        </div>

      </div>
    );
};
export default Contact;