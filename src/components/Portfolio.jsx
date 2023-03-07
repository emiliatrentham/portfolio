import React from "react";
import Giphtionary from "../Assets/portfolio/Giphtionary.png";
import Goalie from "../Assets/portfolio/Goalie.png";
import Weather from "../Assets/portfolio/Weather.png";


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

  return (
    <div
      name="portfolio"
      className="w-full h-screen "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  text-white">
            {" "}
            Portfolio{" "}
          </p>
          <p className="mt-20 text-gray-500">
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
                <div className="flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default Portfolio;
