// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';

import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
        case 'about':
        return <About />
        case 'portfolio':
        return <Portfolio />
        case 'skills':
          return <Skills />
          case 'contact':
        return <Contact />
        //   case 'resume':
        // return <Resume />
    
      default:
        return <p>
      error
        </p>
    }
    
  };
  return (
    <div className="App">
      <NavBar setCurrentPage={setCurrentPage} />
      {renderPage()}
      {/* <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact /> */
      <Socials /> }
    </div>
  );
}

export default App;


// mini project