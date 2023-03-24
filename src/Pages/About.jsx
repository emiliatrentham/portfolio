import React from "react";
// import HeroImage from '../assets/heroimage.png';

const About = () => {
  return (
    <div className="w-full hdarktext-gray-500 ">
      <div
        name="about "
        className="mt-20"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-md mx-auto mb-20">
          <div className="pb-8 mt-10">
            <p className="title text-4xl font-bold inline text-slate-400 dark:text-slate-300">
              About
            </p>
          </div>
          <p className="text-xl text-justify mt-10 text-slate-500  dark:text-slate-400">
          Hello, my name is Emilia! I'm a recent graduate of the University of Washington's Coding Boot Camp, where I gained expertise in HTML5, CSS3, JavaScript, Tailwind, jQuery, Express.js, React.js, Node.js, and more. As a passionate and driven learner, I'm focused on developing my skills in web development and creating innovative solutions.

Prior to attending the bootcamp, I successfully drove the vision for Sano Cafe and family-owned Costa Rican Wildlife Refuge and Yoga Retreat: Luz de Aurora. With a proven history of success in managing projects and overseeing daily operations, I'm skilled at effectively managing project scope, timeline, cost, resources, and expectations, while communicating effectively with business partners, vendors, and team members.


          </p>
          <br />
          <p className="text-xl text-justify text-slate-500  dark:text-gray-400">
          Currently, I work as a Classical Pilates Instructor at BodyTonic Pilates, where I create tailored and dynamic programs for clients to meet their fitness goals and needs. With a focus on client growth and retention, I also assist with social media and online presence.

          Overall, my experience in management, passion for web development, and ability to thrive in fast-paced environments make me a versatile and results-oriented problem-solver who can handle complex challenges with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
