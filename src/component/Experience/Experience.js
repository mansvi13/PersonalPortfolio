import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Experience.css";


export default function Experience() {
  return (
    <div id='Experience'>
      
      <h1><span className='e-heading'>Work Experience</span>&nbsp;<span className='e-icon'>💼</span></h1>
      <div className="e-accordion">
      <Accordion sx={{
            backgroundColor: "#331E6F",
            width:'55%',
            borderRadius:'10px',
            borderTopRightRadius:'10px',
            borderTopLeftRadius:'10px',
            
          }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "#550A86",
            borderRadius:'10px',
            borderTopRightRadius:'10px',
            borderTopLeftRadius:'10px',
        
          }}
        >
          <Typography style={{color:'white'}} ><b>Software Tester @</b> <a style={{color:'white'}} href="https://www.infineon.com/" target="blank"><b>Infineon Technologies</b></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sept 2021 - Jul 2022</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul style={{color:'white'}} className='e-first' >
              <li>Contributed to the Security and Payment Smart Card of 
20+ Team members, in testing the applet.
              </li>
              <li>Conducted 200+ comprehensive manual tests on Smart card applet including functional and Non-Functional testing,using C# & .Net and also compliance tool testing..</li>
              <li>Bugs Identified for 10+ formulated features, reported and Collaborated with the development team in resolving the issue </li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
            backgroundColor: "#331E6F",
            width:'55%',
            borderRadius:'10px',
            borderTopRightRadius:'10px',
            borderTopLeftRadius:'10px'
          }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            backgroundColor: "#550A86",
            p:"sticky",
            borderRadius:'10px',
            borderTopRightRadius:'10px',
            borderTopLeftRadius:'10px'
          }}
        >
        <Typography style={{color:'white'}}><b>Machine Learning Intern @ </b><a style={{color:'white'}} href="https://www.infineon.com/" target="blank"><b>Infineon Technologies</b> </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aug 2020 - Jun 2021</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul  style={{color:'white'}}>
              <li>Worked with the Applied Machine Learning Team in developing the inhouse NLP based Project.
              </li>
              <li> Implemented modules for file parsers with over 10+ 
libraries to ensure the parsed data is cleaned text.</li>
              <li>Programmed text summarization technique that reduced 
document length by 70% and improved readability, also
Keyword Extraction feature that increased search 
accuracy by 40%.
</li>
              <li>Worked on the NLP as well as Computer Vision tasks.</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
};
