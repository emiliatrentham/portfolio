import React, {
  useState,
} from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Switcher from "../Components/Switcher";

const NavBar = ({
  setCurrentPage,
}) => {
  const [nav, setNav] =
    useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      setCurrentPage: () =>
        setCurrentPage(
          "home"
        ),
    },
    {
      id: 2,
      link: "about me",
    },
    {
      id: 3,
      link: "portfolio",
    },
    // {
    //   id: 4,
    //   link: "skills",
    // },
    {
      id: 4,
      link: "resume",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const handleNavClick = (
    link
  ) => {
    setCurrentPage(link);
    setNav(false);
  };

  return (
    <div className="nav flex flex-row justify-between items-center w-full h-20 px-4 fixed bg-none bg-lime-400 dark:bg-stone-900">
      <div>
        <h1 className="text-2xl dark:text-white text-slate-400">
          Emilia Trentham
          <br></br>
          Full-Stack Web Developer
        </h1>
      </div>


      <ul className="hidden md:flex justify-end">
        {links.map(
          ({ id, link }) => (
            <li
              onClick={() =>
                setCurrentPage(
                  link
                )
              }
              key={id}
              className="nav px-4 cursor-pointer capitalize font-medium text-gray-400 dark:text-gray-300 hover:scale-105 hover:text-gray-500 dark:hover:text-gray-400 duration-200"
            >
              {link}
              
            </li>
          )
        )}
            
      </ul>

      <div
        onClick={() =>
          setNav(!nav)
        }
        className="cursor-pointer z10 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 hover:scale-105 duration-200 md:hidden"
      >
        {nav ? (
          <FaTimes
            size={30}
          />
        ) : (
          <FaBars size={30} />
        )}
      </div>

      {nav && (
        <ul className="hamburger-page flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-500 dark:text-slate-300 dark:bg-slate-900 bg-emerald-300">
          <li
            onClick={() =>
              setNav(false)
            }
          >
            <FaTimes
              size={30}
            />
          </li>
          {links.map(
            ({
              id,
              link,
            }) => (
              <li
                onClick={() =>
                  handleNavClick(
                    link
                  )
                }
                key={id}
                className="hamburger-links  mt-5 px-4 py-6 text-4xl cursor-pointer capitalize text-gray-500 dark:text-slate-300 hover:scale-105 duration-200"
              >
                {link}
              </li>
            )
          )}
          <div className="mr-10 mt-6">
            <Switcher />
            </div>
        </ul>
      )}
          
    </div>
  );
};

export default NavBar;
