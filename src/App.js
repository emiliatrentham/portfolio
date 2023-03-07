import { useState } from 'react';

import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
// import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

// theme switcher
import { createContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import ReactSwitch from 'react-switch';


export const ThemeContext = createContext(null);

function App() {
  const [currentPage, setCurrentPage] = useState('about me');
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
        case 'about me':
        return <About />
        case 'portfolio':
        return <Portfolio />
        // case 'skills':
        //   return <Skills />
          case 'contact':
        return <Contact />
          case 'resume':
        return <Resume />
    
      default:
        return <p>
      error
        </p>
    } 
    
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <div className='flex flex-row fixed mr-2'> 
          
          <NavBar setCurrentPage={setCurrentPage} />
                            
         <div className='switch h-20 justify-end '>
            <ReactSwitch
              
              onChange={toggleTheme}
              checked={theme === 'light'}
              uncheckedIcon={<FaSun size={25} style={{color: "orange", display: "flex",
              justifyContent: "flex-end", alignItems: "center", height: "100%", width: '80%', paddingLeft: 6
            }} />}
              checkedIcon={<FaMoon size={25} style={{
                color: "white", display: "flex",
                justifyContent: "flex-end", alignItems: "center", height: "100%", width: '80%', paddingLeft: 8
              }} />}
                offColor="#94a3b8"
                onColor="#94a3b8"
             
              height={35}
              width={75}
              handleDiameter={35}
            
                />
          </div> 
          
        </div>

 
      {renderPage()} 
      <Footer /> 
      </div>
      </ThemeContext.Provider>
  );
}

export default App
