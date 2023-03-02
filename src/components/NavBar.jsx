import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
    
const NavBar = ({setCurrentPage}) => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
            setCurrentPage: () => setCurrentPage('Home')
        },
        {
            id: 2,
            link: 'about'
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
            link: 'contact'
        },
        {
            id: 6,
            link: 'resume'
        }
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-none fixed '>
            <div>
                <h1 className='text-5xl font-brand ml-2 text-white'>
                    Emilia
                </h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({id, link }) => (
                <li onClick={() => setCurrentPage(link) } key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-600 hover:scale-105 duration-200'>
                    {link}
                </li>
            ))}
            </ul>
            <div onClick={() => setNav(!nav)}
                className='cursor-pointer pr-4 z10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-lime-600 via-emerald-300 to-white text-gray-800 '>
            {links.map(({id, link }) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    {link}
                </li>
            ))}    
            </ul>
            )}
        </div>
    )
};

export default NavBar;