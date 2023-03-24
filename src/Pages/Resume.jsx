import React from "react";
// import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineDownload } from "react-icons/ai";

import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGraphql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { VscJson } from "react-icons/vsc";
import { BiGitBranch } from "react-icons/bi";

const Resume = () => {
  const links = [
    {
      id: 1,
      // child: (
      //     <><BsFillPersonLinesFill size={30} />
      //     </>
      // ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  const tech = [
    {
      id: 1,
      child: (
        <>
          {" "}
          <SiHtml5
            size={60}
          />
        </>
      ),
      title: "HTML",
      style:
        "shadow-orange-500",
    },
    {
      id: 2,
      child: (
        <>
          {" "}
          <SiCss3 size={60} />
        </>
      ),
      title: "CSS",
      style:
        "shadow-blue-400",
    },
    {
      id: 3,
      child: (
        <>
          {" "}
          <IoLogoJavascript
            size={60}
          />
        </>
      ),
      title: "JavaScript",
      style:
        "shadow-yellow-500",
    },
    {
      id: 4,
      child: (
        <>
          {" "}
          <SiTailwindcss
            size={60}
          />
        </>
      ),
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      child: (
        <>
          {" "}
          <SiNodedotjs
            size={60}
          />
        </>
      ),
      title: "Node.js",
      style:
        "shadow-green-500",
    },
    {
      id: 6,
      child: (
        <>
          {" "}
          <VscJson
            size={60}
          />
        </>
      ),
      title: "JSON",
      style:
        "shadow-yellow-400",
    },
    {
      id: 7,
      child: (
        <>
          {" "}
          <SiExpress
            size={60}
          />
        </>
      ),
      title: "Express.js",
      style:
        "shadow-gray-400",
    },
    {
      id: 8,
      child: (
        <>
          {" "}
          <BiGitBranch
            size={60}
          />
        </>
      ),
      title: "Git",
      style:
        "shadow-orange-600",
    },
    {
      id: 9,
      child: (
        <>
          {" "}
          <FaReact
            size={60}
          />
        </>
      ),
      title: "React",
      style:
        "shadow-blue-600",
    },
    {
      id: 10,
      child: (
        <>
          {" "}
          <SiGraphql
            size={60}
          />
        </>
      ),
      title: "GraphQL",
      style:
        "shadow-pink-400",
    },
    {
      id: 11,
      child: (
        <>
          {" "}
          <GrMysql
            size={60}
          />
        </>
      ),
      title: "MySQL",
      style:
        "shadow-blue-700",
    },
    {
      id: 12,
      child: (
        <>
          {" "}
          <SiMongodb
            size={60}
          />
        </>
      ),
      title: "MongoDB",
      style:
        "shadow-green-600",
    },
  ];

  return (
    <div
      name="resume"
      className="mt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto w-full">
        <div className="pb-8 mt-10">
          <div className="flex">
            <p className="title text-4xl font-bold p-2 inline text-slate-400 dark:text-slate-300">
              Resume
            </p>

            <ul>
              {links.map(
                ({
                  id,
                  //   child,
                  href,
                  download,
                }) => (
                  <li
                    key={id}
                    className={
                      "w-40 h-14 px-4 py-4 hover:rounded-md "
                    }
                  >
                    <a
                      href={
                        href
                      }
                      className="w-full"
                      download={
                        download
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* {child} */}

                      <div>
                        <button className="download w-fit px-6 my-1 ml-[-30px] flex items-center cursor-pointer text-slate-400 dark:text-slate-300">
                          <span className="hover:text-slate-500">
                            {/* group-hover:rotate-90 */}
                            <AiOutlineDownload
                              size={
                                30
                              }
                              className="ml-1"
                            />
                          </span>
                        </button>
                      </div>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <p className="text-xl text-justify text-slate-500 dark:text-slate-400 mt-10">
           Recent University of Washington Coding Boot Camp graduate offering excellence in the following categories
            and always learning more. I
            previously earned
            an A.A. in
            Business from
            Shoreline
            Community College,
            where I completed
            coursework in
            Managerial
            Leadership,
            Marketing & Sales,
            Economics &
            Statistics,
            International
            Business, Business
            Law, and Quality &
            Productivity. 
            Thank you for
            considering my
            experience and
            qualifications. I
            look forward to
            connecting with
            you!
          </p>

          <div className=" mx-auto p-4 flex flex-col justify-center mt-10">
            <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-2 text-center px-12 sm:px-0 mb-10 text-slate-400 dark:text-slate-300">
              {tech.map(
                ({
                  id,
                  child,
                  title,
                  style,
                }) => (
                  <div
                    key={id}
                    className={`tech shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                  >
                    <div className="flex justify-center">
                      {child}{" "}
                    </div>
                    <p className="mt-4">
                      {title}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
