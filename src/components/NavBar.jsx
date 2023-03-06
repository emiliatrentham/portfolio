import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

//theme
// import { FaMoon } from 'react-icons/fa';
// import { FiSun } from 'react-icons/fi';
// import ReactSwitch from 'react-switch';


const NavBar = ({setCurrentPage}) => {

    const [nav, setNav] = useState(false);

    // const [theme, setTheme] = useState('dark');
    // const toggleTheme = () => {
    //   setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
    // };

    const links = [
        {
            id: 1,
            link: 'home',
            setCurrentPage: () => setCurrentPage('home')
        },
        {
            id: 2,
            link: 'about me',

        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'skills'
        },
        {
            id: 5,
            link: 'resume'
        },
        {
            id: 6,
            link: 'contact'
        },
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white  fixed'>
            <div>
                <h1 className='text-5xl font-brand ml-2 text-white'>
                    Emilia
                </h1>
            </div>
          
{/*                   
         <div className='switch'>
                <ReactSwitch
                onChange={toggleTheme}
                checked={theme === 'light'}
                uncheckedIcon={<FiSun size={25}/>}
                checkedIcon={<FaMoon size={25} />}
                offColor="#ddd"
                onColor="#ddd"
                />
            </div>  */}

            <ul className='hidden md:flex mr-[8%]'>
                {links.map(({id, link }) => (
                <li onClick={() => setCurrentPage(link)} key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    {link}
                </li>
                ))}
            </ul>
            
            
            <div onClick={() => setNav(!nav)}
                className='cursor-pointer pr-4 z10 text-gray-500 md:hidden mr-[20%]'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
            <ul className='bg-black flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from black to-gray-800 text-gray-500'>
            {links.map(({id, link }) => (
              <li onClick={() => setCurrentPage(link) } key={id} className='px-4 py-6 text-4xl cursor-pointer capitalize  text-gray-600 hover:scale-105 duration-200'>
              {link}
          </li>
            ))}    
            </ul>
            )}
  
            
        </div>
        
    )
};

export default NavBar;

// bg-gradient-to-b from-lime-600 via-emerald-300 to-white