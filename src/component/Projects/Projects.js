import React from 'react';
import idf from "./idf.png"
import MApp from "./MApp.png"
import YTS from "./YTS.png"
const Projects = () => {
    return(
        <div className='p-wrapper'>
            <div className ='p-project'>
                <section className='p-horizontal'>
                 <p>Projects</p>

                <h1 className="p-IDF">Intelligent Document Finder</h1>
                <div className="p-IDFdata">
                <img className= "p-idfimage" src={idf} alt ='Mansvi Dubey'/>
            
                <p className="p-idfdetails">Intelligent Document Finder(IDF) is a NLP based document search engine.
                    This application allows the user to find document from the local machine without any need of preinstalled dependency.
                    IDF along with the instant document search supports other functionalities like Text Summarization,Auto Keyword Generation.
                    addition of manual keywords,which will make the user experience more easy to find the document from the machine just by searching 
                    any keyword related to that document.
                </p>
                <p>Technology Stack used for this tool are:- Python,Flask,HTML,CSS,Bootstrap,Javascript,Machine Learning</p>
                
                </div>
                <h1 className="p-Mapp">Audio Streaming App</h1>
                <div className="p-Mappdata">
                <img className="p-Mappimg" src ={ MApp } alt ="MApp"/>
                <p>Built a basic audio streaming app using HTML,CSS,Javascript.From this basic application user can play the music from the list of songs.</p>
                </div>

                <h1 className="p-yts">Audio Streaming App</h1>
                <div className="p-ytsdata">
                <img className="p-ytsimg" src ={ YTS } alt ="YTS"/>
                <p>Built an application where user can easily get the transcripts of the youtube videos and can easily download the transcripts and the summary of the transcripts.
                   This application is in progess.Will update soon.
                </p>
                <p>
                    Technology Stack USed for this application:-Python,FLask,Javascript,HTML,CSS
                </p>
                </div>

                <h1 className="p-Portfolio">Personal Portfolio</h1>
                <div className="p-Portfoliodata">
                <img className="p-PPimg" src ={ YTS } alt ="YTS"/>
                <p>Created the personal Portfolio
                </p>
                <p>
                    Technology Stack USed for this application:-React.js,JSX,CSS,Javascript
                </p>
                </div>



                </section>
            </div>

        </div>
    );
};

export default Projects;
