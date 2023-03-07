import React, {
  useState,
} from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

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
    <div className="nav flex justify-between items-center w-full h-20 px-4 fixed">
      <div>
        <h1 className="text-5xl font-brand ml-2 text-white">
          Emilia
        </h1>
      </div>

      <ul className="hidden md:flex mr-[8%]">
        {links.map(
          ({ id, link }) => (
            <li
              onClick={() =>
                setCurrentPage(
                  link
                )
              }
              key={id}
              className="nav px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-gray-600 duration-200"
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
        className="cursor-pointer pr-4 z10 text-gray-400 md:hidden mr-[20%]"
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
        <ul className="hamburger-page flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from black to-gray-800">
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
                className="hamburger-links mt-5 px-4 py-6 text-4xl cursor-pointer capitalize  text-gray-500 hover:scale-105 duration-200"
              >
                {link}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
