import React from 'react';
import "./Experience.css";

const Experience = () => {
    return(
    <div className = "e-wrapper">
        <div className="e-content">
            <section className="e-section">
                <h1>
                    Where I Have Worked...
                </h1>
                <span> Software Tester </span>
                <span className = "e-company">
                &nbsp;@&nbsp;
                <a href="https://www.infineon.com/">Infineon Technologies</a>
                </span>
                <p>Sept 2021 - Jul 2022</p>
                <ul >
                    <li>Worked with the Security and Payment Smart Card team,in testing
                        the developed functionality of the EMV smart card.
                    </li>
                    <li>Write performant and maintainable code to test the smart card using C# and .NET.</li>
                    <li>Responsible for Bug identification,writing Test cases and generating Test reports.</li>
                </ul>
                <span> Machine Learning Intern </span>
                <span className = "e-company">
                &nbsp;@&nbsp;
                <a href="https://www.infineon.com/">Infineon Technologies</a>
                </span>
                <p>Aug 2020 - Jun 2021</p>
                <ul >
                    <li>Worked with the Applied Machine Learning Team as an Intern in developing the inhouse NLP based Project.
                    </li>
                    <li>Responsible for developing the frontend and backend of the application using techniques like Python,HTML,CSS,FLASk,Javascript</li>
                    <li>Worked on NLP based project as well as computer vision based tasks.</li>
                </ul>
            </section>
        </div>
    </div>
    );
};

export default Experience;