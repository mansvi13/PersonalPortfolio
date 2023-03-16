import React from 'react';
import idf from "./idf.png"
import MApp from "./MApp.png"
import YTS from "./YTS.png"
import "./Projects.css";
const Projects = () => {
    return(
        <div className='p-wrapper'>
            <div className ='p-project'>
                <section className='p-horizontal'>
                 <p style={{ color: 'white' }} >Projects</p>
                
                {/*---------------------- Project 1--------------------------*/}

                <h1 className="p-IDF" style={{ color: 'violet',fontSize:'250%' }}>Intelligent Document Finder</h1>
                <div className="p-IDFdata">
                <img className= "p-idfimage" src={idf} alt ='Mansvi Dubey'/>
            
                <p className="p-idfdetails" style={{ color: 'white',width:'40%',marginLeft:'57%',marginTop:'-24%',fontFamily:"verdana",fontSize:'110%'}}><br></br>Intelligent Document Finder(IDF) is a NLP based document search engine.<br></br>
                    This application allows the user to find document from the local machine without any need of preinstalled dependency
                    IDF along with the instant document search supports other functionalities like Text Summarization,Auto Keyword Generation.
                    addition of manual keywords,which will make the user experience more easy to find the document from the machine just by searching <br></br>
                    any keyword related to that document.<br></br>
                    <br></br>
                    Technology Stack used for this tool are:- Python,Flask,HTML,CSS,Bootstrap,Javascript,Machine Learning
                    <br></br>
                    <br></br>
                </p>
                </div>
                
                {/*------------------------- Project 2--------------------------*/}

                <h1 className="p-Mapp" style={{ color: 'violet',fontSize:'250%'}} >Audio Streaming App</h1>
                <div className="p-Mappdata">
                <img className="p-Mappimg" src ={ MApp } alt ="MApp"/>
                <p style={{color:'white' ,width:'40%',marginLeft:'57%',marginTop:'-21%',fontFamily:"verdana",fontSize:'110%'}}>Built a basic audio streaming app using HTML,CSS,Javascript. <br></br>
                From this basic application user can play the music from the list of songs.</p>
                </div>

                {/*-------------------------- Project 3---------------------------*/}

                <h1 className="p-yts" style={{color: 'violet',fontSize:'250%' }}>YTS</h1>
                <div className="p-ytsdata">
                <img className="p-ytsimg" src ={ YTS } alt ="YTS"/>
                <p style={{color: 'white',width:'40%',marginLeft:'57%',marginTop:'-29%',fontFamily:"verdana",fontSize:'110%'}}>Built an application where user can easily get the transcripts of the youtube videos and can  <br></br>
                   easily download the transcripts and the summary of the transcripts. <br></br>
                   This application is in progess.Will update soon.<br></br>
                   Technology Stack Used for this application:-Python,FLask,Javascript,HTML,CSS
                </p>
                </div>

                {/*------------------------ Project 4---------------------------*/}

                <h1 className="p-Portfolio" style={{ color: 'violet',fontSize:'250%' }}>Personal Portfolio</h1>
                <div className="p-Portfoliodata">
                <img className="p-PPimg" src ={ YTS } alt ="YTS"/>
                <p style={{color:'white' ,width:'40%',marginLeft:'57%',marginTop:'-29%',fontFamily:"verdana",fontSize:'110%'}}>Created the personal Portfolio <br></br>
                Technology Stack Used for this application:-React.js,JSX,CSS,Javascript
                </p>
               
                </div>

                </section>
            </div>

        </div>
    );
};

export default Projects;
