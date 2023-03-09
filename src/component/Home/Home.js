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
                    Hello Stranger!!
                </h1>
                <h2 className='h-name'>
                    I am Mansvi...
                </h2>
                <h3 className='h-soft'>
                    Software Engineer
                </h3>
                </section>
                <div className="h-right">
                 <img className= "h-avtar" src={avtar} alt ='Mansvi Dubey'/>
                </div>
            </div>
        </div>
    );
};

export default Home;