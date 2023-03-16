import React from 'react';
import idf from "./idf.png"
import MApp from "./MApp.png"
import YTS from "./YTS.png"
import { FaGithub } from "react-icons/fa";
import "./Projects.css";
const Projects = () => {
    return(
        <div className='p-wrapper'>
            <div className ='p-project'>
                <section className='p-horizontal'>
                { /*<p style={{ color: 'white',textAlign:'center',fontSize:'300%' }} >Glimpse Of My Work<s💻</p>*/}
                 <h1>
                 <span className='p-heading'>Glimpse Of My Work</span>&nbsp;<span className='p-icon'>👩‍💻</span>
                 </h1>
             
                 
                {/*---------------------- Project 1--------------------------*/}

                <h1 className="p-IDF" style={{ color: 'violet',fontSize:'250%',marginBottom:'-4%' }}>Intelligent Document Finder</h1>
                
                <img className= "p-idfimage" src={idf} alt ='Mansvi Dubey'/>
                
                <p className="p-idfdetails" style={{ color: 'white',width:'40%',marginLeft:'57%',marginTop:'-20%',fontFamily:"verdana",fontSize:'110%'}}>Intelligent Document Finder(IDF) is a NLP based document search engine.<br></br>
                    This application allows the user to find document from the local machine without any need of preinstalled dependency
                    IDF along with the instant document search supports other functionalities like Text Summarization,Auto Keyword Generation.
                    addition of manual keywords,which will make the user experience more easy to find the document from the machine just by searching <br></br>
                    any keyword related to that document.
                    <br></br>
                    Technology Stack used for this tool are:- Python,Flask,HTML,CSS,Bootstrap,Javascript,Machine Learning
                    <br></br>
                    <br></br>
                    <span>
                    <a className="github" href = "https://github.com/mansvi13/Intelligent-Document-Finder" target="blank" >
                    <FaGithub size ='3rem'/>
                    </a>
                    </span>
                </p>
                
                
                {/*------------------------- Project 2--------------------------*/}

                <h1 className="p-Mapp" style={{ color: 'violet',fontSize:'250%',marginBottom:'-7%'}} >Audio Streaming App</h1>
                <div className="p-Mappdata">
                <img className="p-Mappimg" src ={ MApp } alt ="MApp"/>
                <p style={{color:'white' ,width:'40%',marginLeft:'57%',marginTop:'-15%',fontFamily:"verdana",fontSize:'110%'}}>Built a basic audio streaming app using HTML,CSS,Javascript. <br></br>
                From this basic application user can play the music from the list of songs.
                <br></br>
                <br></br>
                <span>
                    <a className="github" href = "https://github.com/mansvi13/AudioStreaming" target="blank" >
                    <FaGithub size ='3rem'/>
                    </a>
                    </span>
                </p>            
                </div>

                {/*-------------------------- Project 3---------------------------*/}

                <h1 className="p-yts" style={{color: 'violet',fontSize:'250%',marginBottom:'-7%' }}>YTS</h1>
                <div className="p-ytsdata">
                <img className="p-ytsimg" src ={ YTS } alt ="YTS"/>
                <p style={{color: 'white',width:'40%',marginLeft:'57%',marginTop:'-23%',fontFamily:"verdana",fontSize:'110%'}}>Built an application where user can easily get the transcripts of the youtube videos and can  <br></br>
                   easily download the transcripts and the summary of the transcripts. <br></br>
                   This application is in progess.Will update soon.<br></br>
                   Technology Stack Used for this application:-Python,FLask,Javascript,HTML,CSS
                   <br></br>
                <br></br>
                   <span>
                    <a className="github" href = "https://github.com/mansvi13/YoutubeTranscriptSummarizer" target="blank" >
                    <FaGithub size ='3rem'/>
                    </a>
                    </span>   
                </p>
                </div>

                {/*------------------------ Project 4---------------------------*/}

                <h1 className="p-Portfolio" style={{ color: 'violet',fontSize:'250%',marginBottom:'-7%' }}>Personal Portfolio</h1>
                <div className="p-Portfoliodata">
                <img className="p-PPimg" src ={ YTS } alt ="YTS"/>
                <p style={{color:'white' ,width:'40%',marginLeft:'57%',fontFamily:"verdana",fontSize:'110%',marginTop:'-23%'}}>Created the personal Portfolio <br></br>
                Technology Stack Used for this application:-React.js,JSX,CSS,Javascript
                <br></br>
                <br></br>
                <span>
                    <a className="github" href = "https://github.com/mansvi13/PersonalPortfolio" target="blank" >
                    <FaGithub size ='3rem'/>
                    </a>
                </span> 
                </p>
                
                </div>

                </section>
            </div>

        </div>
    );
};

export default Projects;
