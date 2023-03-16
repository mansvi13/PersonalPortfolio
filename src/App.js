import NavBar  from "./component/NavBar/NavBar";
import About  from "./component/About/About";
import Home from "./component/Home/Home";
import Experience from "./component/Experience/Experience";
import Projects from "./component/Projects/Projects";
import Contact from"./component/Contact/Contact";
import Footer from"./component/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
     <div className="A-wrapper" style={{ backgroundColor: 'black'}}>
      
      <NavBar />
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Experience' element={<Experience />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/contact' element={ <Contact/> } /> 
        
      </Routes>

    
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    </div>
    </>
  );
}

export default App;
