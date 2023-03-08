import React from "react";
import Giphtionary from "../Assets/portfolio/Giphtionary.png";
import Goalie from "../Assets/portfolio/Goalie.png";
import Weather from "../Assets/portfolio/Weather.png";
import JATE from "../Assets/portfolio/JATE.png";
import NoteTaker   from "../Assets/portfolio/NoteTaker.png";
import DayDreams   from "../Assets/portfolio/DayDreams.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 2,
      src: Giphtionary,
    },
    {
      id: 1,
      src: Goalie,
    },
    {
      id: 3,
      src: Weather,
      // href: 'https://emiliatrentham.github.io/weather-dashboard/',
      // href_2: 'https://github.com/emiliatrentham/weather-dashboard',
    },

    {
        id: 4,
        src: JATE,
    },
    {

        id: 6,
        src: NoteTaker
    },
    {
        id: 6,
        src: DayDreams
    },
  ];

  return (
    <div className="w-full h-screen text-white">
      <div name="portfolio">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
          <div className="pb-8  py-40">
            <p className="title text-4xl font-bold inline  text-white">
              {" "}
              Projects{" "}
            </p>
            {/* <p className="title mt-20">
              {" "}
              Check out some
              of my work!
            </p> */}
          </div>

          <div className="flex flex-col gap-8 py-8 lg:flex-row lg:flex-wrap">
            {portfolios.map(
              ({
                id,
                src,
              }) => (
                <div
                  key={id} 
                  className="portfolio shadow-md shadow-gray-600 duration-200 rounded-lg basis-1/3 flex-1"
                >
                  {" "}
                
                  <img
                    src={src}
                    alt=""
                    className="rounded-lg hover:scale-105 object-fit"
                    width={
                      "100%"
                    }
                    height={
                      "100%"
                    }
                    layout="responsive"
                  />
            
                  <div className="flex items-center">
                    <button className="w-1/2 px-8 py-3 m-4 duration-300 hover:scale-105 rounded-md text-white bg-gradient-to-b from-teal-300 to-teal-600">
                      Deployed
                    </button>
                    <button className="w-1/2 px-8 py-3 m-4 duration-300 hover:scale-105 rounded-md text-white bg-gradient-to-b from-teal-300 to-teal-600">
                      Code
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

