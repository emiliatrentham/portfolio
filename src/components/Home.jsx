import React from "react";
import HeroImage from "../Assets/heroimage.png";
// import {TiArrowRightOutline} from 'react-icons/ti'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="title text-4xl sm:text-7xl font-bold">
            I'm a Full Stack
            Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-lg">
            Lorem ipsum dolor
            sit amet
            consectetur
            adipiscing elit
            mattis, netus
            nulla tempor
            litora ante purus
            phasellus eros,
            diam cras congue
            ullamcorper hac
            pulvinar vitae.
          </p>
          {/* <div > */}
          {/* <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-300 to-teal-700 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <TiArrowRightOutline size={25} className='ml-1'/>
                            </span>
                        </button> */}
          {/* </div> */}
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-2/4 sm:w-2/4 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
