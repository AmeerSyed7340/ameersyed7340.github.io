import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-myName ml-2">Ameer</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link.link}
          </li>
        ))}
        {/* <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>Home</li> */}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4 text-gray-500"
      >
        {nav ? (
          <FaTimes size={20} />
        ) : (
          <FaBars size={20} onClick={() => setNav(!nav)} />
        )}
      </div>

      {nav && (
        <ul className="md:hidden absolute top-20 left-0 w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800">
          {links.map((link) => (
            <li
              key={link.id}
              className="py-6 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              {link.link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
