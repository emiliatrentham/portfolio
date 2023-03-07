import React from "react";
import Giphtionary from "../Assets/portfolio/Giphtionary.png";
import Goalie from "../Assets/portfolio/Goalie.png";
import Weather from "../Assets/portfolio/Weather.png";


// import { FaReact} from 'react-icons/fa';
// import { SiHtml5, SiCss3, SiTailwindcss, SiGraphql, SiMongodb } from 'react-icons/si';
// import { IoLogoJavascript } from 'react-icons/io';
// import { GrMysql } from 'react-icons/gr';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Weather,
      // href: 'https://emiliatrentham.github.io/weather-dashboard/',
      // href_2: 'https://github.com/emiliatrentham/weather-dashboard',
    },
    {
      id: 2,
      src: Giphtionary,
    },
    {
      id: 3,
      src: Goalie,
    },

    // {
    //     id: 4,
    //     src: ''
    // },
    // {

    //     id: 5,
    //     src: ''
    // },
    // {
    //     id: 6,
    //     src: ''
    // },
  ];
    
//   const tech = [
//     {
//       id: 1,
//       child: (
//         <> <SiHtml5 size={60} />
//         </>),
//       title: 'HTML',
//       style: 'shadow-orange-500'
//     },
//     {
//       id: 2,
//       child: (
//         <> <SiCss3 size={60} />
//         </>),
//       title: 'CSS',
//       style: 'shadow-blue-400'
//     },
//     {
//       id: 3,
//       child: (
//         <> <IoLogoJavascript  size={60} />
//         </>),
//       title: 'JavaScript',
//       style: 'shadow-yellow-500'
//     },
//     {
//       id: 4,
//       child: (
//         <> <SiTailwindcss size={60} />
//         </>),
//       title: 'Tailwind',
//       style: 'shadow-sky-400'
//     },
//     {
//       id: 5,
//       child: (
//         <> <FaReact size={60} />
//         </>),
//       title: 'React',
//       style: 'shadow-blue-600'
//     },
//     {
//       id: 6,
//       child: (
//         <> <SiGraphql size={60} />
//         </>),
//       title: 'GraphQL',
//       style: 'shadow-pink-400'
//     },
//     {
//       id: 7,
//       child: (
//         <> <GrMysql size={60} />
//         </>),
//       title: 'MySQL',
//       style: 'shadow-blue-800',
//     },
//     {
//       id: 8,
//       child: (
//         <> <SiMongodb size={60} />
//         </>),
//       title: 'MongoDB',
//       style: 'shadow-green-800',
//     },
//   ]

  return (
    <div
      name="portfolio"
      className="w-full h-screen text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  text-white">
            {" "}
            Projects{" "}
          </p>
          <p className="mt-20">
            {" "}
            Check out some of
            my work!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({ id, src }) => (
              <div
                key={id}
                className="portfolios shadow-md shadow-gray-600 rounded-lg "
              >
                <div>
                  {" "}
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                      </div>
                      
                <div className="flex items-center justify-center  text-gray-600">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Deployed
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                    Code
                  </button>
                      </div>
                      
              </div>
            )
          )}
        </div>
    
    {/* <div className='mt-20 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div  className='pb-8'>
        <p className='text-4xl font-bold p-2 inline'>
          Skills
          </p>
      </div>
    
        <div className='mt-20 w-full grid grid-cols-2 sm:grid-cols-8 gap-2 text-center py-8 px-12 sm:px-0'>
          
          {tech.map(({ id, child, title, style }) => (
          
            <div key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <div className='flex justify-center'>{child}  </div>
        <p className='mt-4'>
                {title}
        </p>
      </div>
        ))
          }
   
   
      </div>
          </div> */}
          
          </div>
          </div>
  );
};



export default Portfolio;

