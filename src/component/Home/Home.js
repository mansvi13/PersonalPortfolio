import React from 'react';
import "./Home.css";
import avtar from "./avtar.png"

const Home = () =>{
    return(
        <div className="h-Wrapper">
            <div className="h-left">
                {/*left*/}
                <section>
                <h1 className='h-greet'>
                    नमस्ते , I am
                    &nbsp;🙏 &nbsp;
                </h1>
                
                <span className='h-name'>
                    Mansvi Dubey
                </span>
                <h2 className='h-soft' >
                    Software Engineer
                </h2>
                </section>
                <div className="h-right">
                 <img className= "h-avtar" src={avtar} alt ='Mansvi Dubey'/>
                </div>
            </div>
        </div>
    );
};

export default Home;