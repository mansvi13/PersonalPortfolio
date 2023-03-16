import React from 'react';
import "./Experience.css";

const Experience = () => {
    return(
    <div className = "e-wrapper">
        <div className="e-content">
            <section className="e-section">
                <h1 className="e-head">
                    Where I Have Worked...
                </h1> 
                <span style={{ color: 'white' }}> Software Tester </span>
                <span className = "e-company">
                &nbsp;@&nbsp;
                <a href="https://www.infineon.com/" target="blank">Infineon Technologies</a>
                </span>
                <p className="e-tenure1">Sept 2021 - Jul 2022</p>
                <ul className='e-first' >
                    <li>Worked with the Security and Payment Smart Card team,in testing
                        the developed functionality of the EMV smart card.
                    </li>
                    <li>Write performant and maintainable code to test the smart card using C# and .NET.</li>
                    <li>Responsible for Bug identification,writing Test cases and generating Test reports.</li>
                </ul>
                <span style={{ color: 'white' }}> Machine Learning Intern @ </span>
                <span className = "e-company">
               
                <a href="https://www.infineon.com/" target="blank" >Infineon Technologies</a>
                </span>
                <p className="e-tenure2">Aug 2020 - Jun 2021</p>
                <ul className='e-second' >
                    <li>Worked with the Applied Machine Learning Team in developing the inhouse NLP based Project.
                    </li>
                    <li>Responsible for performing the File Parsing Techniques for different file formats.</li>
                    <li>Built the frontend of the application</li>
                    <li>Worked on the NLP as well as Computer Vision tasks.</li>
                </ul>
            
                
            </section>
        </div>
    </div>
    );
};

export default Experience;

/*
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Experience() {
  return (
    <div>
      <Accordion sx={{
            backgroundColor: "blue",
            width:'50%',
            ml:'20%',
            justifyContent:"center"
            
          }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          
          sx={{
            backgroundColor: "#8F00FF",
           
            
           
          }}
         
        >
          <Typography >Software Tester @ <a href="https://www.infineon.com/" target="blank">Infineon Technologies</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sept 2021 - Jul 2022</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className='e-first' >
              <li>Worked with the Security and Payment Smart Card team,in testing
                  the developed functionality of the EMV smart card.
              </li>
              <li>Write performant and maintainable code to test the smart card using C# and .NET.</li>
              <li>Responsible for Bug identification,writing Test cases and generating Test reports.</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography>Machine Learning Intern @ <a href="https://www.infineon.com/" target="blank">Infineon Technologies </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aug 2020 - Jun 2021</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className='e-second' >
              <li>Worked with the Applied Machine Learning Team in developing the inhouse NLP based Project.
              </li>
              <li>Responsible for performing the File Parsing Techniques for different file formats.</li>
              <li>Built the frontend of the application</li>
              <li>Worked on the NLP as well as Computer Vision tasks.</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};
*/