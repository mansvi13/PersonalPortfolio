import React from 'react';
import "./footer.css";

const Footer = () =>{
    return (
        <>
         <div className="F-line" style={{ borderTop: "1px solid #fff",marginTop:"4rem" }}></div>
        <div className="F-wrapper">
            <span style={{ color: 'white' }}> Made with ❤️ | Design and Built by </span>
            <p style={{ color: 'white' }}>Mansvi Dubey</p>
        </div>
        </>
    );

    
};
export default Footer;

