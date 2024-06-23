import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-5'>
          I am Ameer Syed, a Full Stack Developer from Queens, NY, with a Computer Science degree from Queens College. Skilled in the MERN stack, I develop responsive, user-focused web solutions that effectively combine user needs with robust technology.
        </p>

        <br />

        <p className='text-xl'>
          Currently, I am advancing my expertise through a full-stack project that features API integration and cloud-based operations, demonstrating my ability to handle complex software development tasks efficiently. My goal is to continuously refine my skills and contribute to innovative technology projects.
        </p>
      </div>
    </div>
  );
};

export default About;
