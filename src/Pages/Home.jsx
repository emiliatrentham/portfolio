import React from "react";
import HeroImage from "../Assets/heroimage.png";
// import {TiArrowRightOutline} from 'react-icons/ti'

const Home = () => {
  return (
    <div
      name="home"
      className="w-full max-w-screen-lg mx-auto"
    >
      <div className="mt-20 flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col">
          <h2 className="mt-20 title text-4xl sm:text-7xl font-bold text-slate-400 dark:text-slate-300">
            Full-Stack
            Developer
          </h2>

      
          <p className="text-slate-500 dark:text-slate-400 py-4 max-w-lg mt-10 ">
           Offering a range of solutions in Design, API Management, Server Management, and Database Management.
          </p>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto mt-20 w-2/3 sm:2/4"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
