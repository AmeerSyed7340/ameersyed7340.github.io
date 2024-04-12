import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
          <p className='text-gray-500 py-4 max-w-[900px]'>
            Lorem ipsum dolor sit amet, consaectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div>
            <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                Portfolio
                <span>
                    <MdKeyboardArrowRight/>
                </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
