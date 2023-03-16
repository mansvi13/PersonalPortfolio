import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Experience.css";


export default function Experience() {
  return (
    <div>
      
      <h1  style={{color:'white', marginLeft:'600px',marginTop:'15rem'}}>Work  Experience</h1>
      <Accordion sx={{
            backgroundColor: "blue",
            width:'55%',
            ml:'20%',
            p:'relative'
          }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "#8F00FF",
            p:'absolute'
          }}
         
        >
          <Typography style={{color:'white'}} >Software Tester @ <a style={{color:'white'}} href="https://www.infineon.com/" target="blank">Infineon Technologies</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sept 2021 - Jul 2022</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul style={{color:'white'}} className='e-first' >
              <li>Worked with the Security and Payment Smart Card team,in testing
                  the developed functionality of the EMV smart card.
              </li>
              <li>Write performant and maintainable code to test the smart card using C# and .NET.</li>
              <li>Responsible for Bug identification,writing Test cases and generating Test reports.</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
            backgroundColor: "#4B0082",
            width:'55%',
            ml:'20%',
            justifyContent:"center",
            flexdirection: 'column', 
            p:"sticky",
            bottom:0
          }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "#8F00FF",
            p:"sticky",
            bottom:0
          }}
        >
        <Typography style={{color:'white'}}>Machine Learning Intern @ <a style={{color:'white'}} href="https://www.infineon.com/" target="blank">Infineon Technologies </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aug 2020 - Jun 2021</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul  style={{color:'white'}}>
              <li>Worked with the Applied Machine Learning Team in developing the inhouse NLP based Project.
              </li>
              <li>Responsible for performing the File Parsing Techniques for different file formats.</li>
              <li>Built the frontend of the application</li>
              <li>Worked on the NLP as well as Computer Vision tasks.</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
};

/*import React from 'react';

const Experience = () =>{
  return(
    <>
    <details >
   
      <summary >Epcot Center</summary>
     
 
  <p >Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>
    </>
  );

};
export default Experience;
*/