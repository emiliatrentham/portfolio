import React from "react";
import Giphtionary from "../Assets/portfolio/Giphtionary.png";
import Goalie from "../Assets/portfolio/Goalie.png";
import Weather from "../Assets/portfolio/Weather.png";
import JATE from "../Assets/portfolio/JATE.png";
import NoteTaker from "../Assets/portfolio/NoteTaker.png";
import DayDreams from "../Assets/portfolio/DayDreams.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Goalie,
      title: "Goalie",
      description:
      "App that enables users to share and track their goals with peers while everaging the power of Chart.js, to help them gain insights into their progress and stay motivated!",
      github_link:
        "https://github.com/emiliatrentham/goal-tracker",
      deployed_link:
        "https://goal-keeper.herokuapp.com/",
    },
    {
      id: 2,
      src: Giphtionary,
      title: "Giphtionary",
      description:
        "Where words meets giph! A vanilla JS app to check word definitions that displays complementary GIFs. By displaying a GIF, the app also provides people who are visual learners with a visual aid to help them better understand definitions.",
      github_link:
        "https://github.com/TheBluWiz/Giphtionary",
      deployed_link:
        "https://thebluwiz.github.io/Giphtionary/",
    },
    {
      id: 3,
      src: '',
      title: "HackerFit",
      description:
        "React-based web application designed to simplify the search for exercise routines based on specific muscle groups. Developed to streamline the process of discovering new exercises, and to allow users to explore and diversify their fitness routine.",
      github_link: "https://young-fjord-19401.herokuapp.com/",
      deployed_link:
        "https://github.com/mtownsend509/HackerFit",
    },
    {
      id: 4,
      src: Weather,
      title: "Weather",
      description:
        "Vanilla JavaScript Weather app that integrates with the Open Weather Map API to provide users with up-to-date information on current weather conditions and forecasts.",
      github_link:
        "https://emiliatrentham.github.io/weather-dashboard/",
      deployed_link:
        "https://github.com/emiliatrentham/weather-dashboard",
    },
    // {
    //   id: 5,
    //   src: NoteTaker,
    //   title: "Weather",
    //   description:
    //     "lorem ipsum dolor sit amet",
    //   github_link:
    //     "https://emiliatrentham.github.io/weather-dashboard/",
    //   deployed_link:
    //     "https://github.com/emiliatrentham/weather-dashboard",
    // },
    // {
    //   id: 6,
    //   src: DayDreams,
    //   title: "Weather",
    //   description:
    //     "lorem ipsum dolor sit amet",
    //   github_link:
    //     "https://emiliatrentham.github.io/weather-dashboard/",
    //   deployed_link:
    //     "https://github.com/emiliatrentham/weather-dashboard",
    // },
  ];

  return (
    <div className="w-full">
      <div name="portfolio" className="mt-20">
        <div className="flex flex-col p-4 justify-center max-w-screen-md mx-auto">
          <div className="pb-8 mt-10">
            <p className="title text-4xl font-bold inline text-slate-400 dark:text-slate-300">
              Projects{" "}
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-8 px-12 sm:px-0 text-slate-400 dark:text-slate-300 mb-20">
  {portfolios.map(({ id, title, description, github_link, deployed_link }) => (
    <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col justify-between">
      <p className="px-2 py-3 m-2">{title}</p>
      <p className="px-2 py-3 m-2">{description}</p>
      <div className="flex-grow"></div>
      <div className="flex justify-end items-end">
        <a
          href={deployed_link}
          className="w-1/2 px-2 py-3 m-2 duration-300 hover:scale-105 rounded-md text-white bg-gradient-to-b from-teal-300 to-teal-600"
        >
          Deployed
        </a>
        <a
          href={github_link}
          className="w-1/2 px-2 py-3 m-2 duration-300 hover:scale-105 rounded-md text-white bg-gradient-to-b from-teal-300 to-teal-600"
        >
          Code
        </a>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
