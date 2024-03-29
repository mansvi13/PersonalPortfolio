import React from 'react';
import "./About.css";
import resume from './resume.pdf';

const About = () =>{
    return(
        <div className="a-Wrapper" id='About'>
            <h1 className="a-heading">About Me</h1>
            <div className="a-left">
                {/*left*/}
                <article>
                    <p>
                       Hello! My name is  Mansvi Dubey...I am Passionate,Conscientious person who is always open to learn.<br></br>
                       When I am not working,most probably,you'll find me sleeping😴.
                    </p>    
                    <p>
                        OK, Now coming to my Hard and Soft skills:-My Hard Skills that I have acquired through determined efforts are <br /><strong style={{color:'violet'}}>HTML,CSS,JavaScript,Python,SQL basics,React.js,Machine Learning and others.</strong><br></br>
                        On the other hand,My soft skills includes:-<strong style={{color:'violet'}}>Leadership,Communication,Adaptability and Interpersonal Skills.</strong>
                    </p>
                    <p>    
                        Currently,I am looking for 🔍 Job opportunities where I can use my skills and abilites to make a significant <br></br> contribution to the organization and also,where I can Learn and Grow.If you have any opportunity or if you <br></br>find my experience,skills relevant than please contact me.
                    </p>
                </article>
                <a href={resume} download>
                 <button className="a-resume">Download Resume</button>
                </a>
            </div>
            <div className="a-right">
            <h1 className="a-headingright">My Skills</h1>
            <div className='a-Skills'>
            <div className='a-skill'>HTML</div>
            <div className='a-skill'>CSS</div>
            <div className='a-skill'>JavaScript</div>
            <div className='a-skill'>ReactJs</div>
            <div className='a-skill'>Python</div>
            <div className='a-skill'>Flask</div>
            <div className='a-skill'>SQL Basics</div>
            <div className='a-skill'>Machine Learning</div>
            </div>
            </div>
        </div>
    );
};

export default About;