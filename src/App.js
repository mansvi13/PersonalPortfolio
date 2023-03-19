import NavBar  from "./component/NavBar/NavBar";
import About  from "./component/About/About";
import Home from "./component/Home/Home";
import Experience from "./component/Experience/Experience";
import Projects from "./component/Projects/Projects";
import Contact from"./component/Contact/Contact";
import Footer from"./component/Footer/Footer";

function App() {
  return (
    <>
     <div className="A-wrapper" style={{ backgroundColor: 'black'}}>
         
      <NavBar />  
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  );
};

export default App;
