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
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";

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
      id: 6,
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
      id: 7,
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
        "shadow-blue-800",
    },
    {
      id: 8,
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
        "shadow-green-800",
    },
  ];

  return (
    <div
      name="resume"
      className="w-full h-screen text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 py-40">
          <div className="flex">
            <p className="title text-4xl font-bold text-white p-2 inline">
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
                      "w-40 h-14 px-4 py-4  hover:ml-[+10px] hover:rounded-md hover:scale-110 duration-300"
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
                        <button className="download w-fit px-6 my-1 ml-[-30px] flex items-center cursor-pointer">
                          <span className=" duration-300">
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

          <p className="mt-20 text-xl text-gray-500">
            Praesent duis eget
            iaculis magnis ad
            aliquam enim
            eleifend, placerat
            taciti quis in
            pretium eros
            litora nostra
            augue, felis
            auctor proin
            potenti sem
            sollicitudin
            risus. Metus
            malesuada ad leo
            tempor diam et,
            blandit lectus
            quis facilisi
            justo potenti,
            pulvinar vulputate
            nostra curae at.
          </p>
          <p className="text-xl text-gray-500">
            Lorem ipsum dolor
            sit amet
            consectetur
            adipisicing elit.
            Dolorum porro
            tenetur natus
            voluptate! Veniam
            obcaecati nam et
            provident in neque
            laboriosam
            temporibus
            assumenda. Ducimus
            sint inventore,
            laboriosam
            excepturi debitis,
            dolores fuga
            officiis nam quod
            culpa a, repellat
            corporis saepe
            tempore minima
            nulla repellendus
            voluptate
            exercitationem
            consequuntur
            sapiente.
            Accusamus, totam
            magni!
          </p>

          <div className=" mx-auto p-4 flex flex-col justify-center">
            <div className="pb-8">
              {/* <p className='text-4xl font-bold p-2 inline'>
          Skills
          </p> */}
            </div>

            <div className="mt-10 w-full grid grid-cols-2 sm:grid-cols-8 gap-2 text-center py-8 px-12 sm:px-0">
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
