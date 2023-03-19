import React from 'react';
import "./Home.css";
import avtar from "./avtar.png"


const Home = () =>{
    return(
        <div className="h-Wrapper"id= 'Home'>
            <div className="h-left">
                {/*left*/}
                <section>
                <h1 className='h-greet'>
                    नमस्ते <span>🙏,</span> I am
                </h1>
                
                <span className='h-name'>
                    Mansvi Dubey
                </span>
                <h2 className='h-soft' >
                    Software Engineer
                </h2>
                </section>
                <a className="Gmail" href = "mailto:mansidubey987@gmail.com" target="blank">
                 <button className="h-hire">Hire me</button>
                 </a>
                <div className="h-right">
                 <img className= "h-avtar" src={avtar} alt ='Mansvi Dubey'/>
                </div>
            </div>
        </div>
    );
};

export default Home;