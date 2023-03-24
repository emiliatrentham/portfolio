import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Switcher from "../Components/Switcher";

const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn{" "}
          <FaLinkedin
            size={30}
          />
        </>
      ),
      href: "https://www.linkedin.com/in/emilia-trentham-987a59164/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub{" "}
          <FaGithub
            size={30}
          />
        </>
      ),
      href: "https://github.com/emiliatrentham",
    },
    {
      id: 3,
      child: (
        <>
          Stack Overflow{" "}
          <FaStackOverflow
            size={30}
          />
        </>
      ),
      href: "https://stackoverflow.com/users/21322500/emilia-trentham",
    },
    {
      id: 4,
      child: (
        <>
          Mail{" "}
          <HiOutlineMail
            size={30}
          />
        </>
      ),
      href: "mailto:lavernatrentham@gmail.com",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[65%] ml-[-10px] left-0 fixed">
      <div>
        <ul>
          {links.map(
            ({
              id,
              child,
              href,
              style,
              download,
            }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 ml-[-80px] hover:ml-[-5px] hover:rounded-md duration-300 " +
                  "" +
                  style
                }
              >
                <a
                  href={href}
                  className="footer flex justify-between items-center w-full dark:text-white text-slate-400"
                  download={
                    download
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="ml-4 py-3">
        <Switcher />
      </div>
    </div>
  );
};

export default Socials;
