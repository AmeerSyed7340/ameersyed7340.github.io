import React from "react";
import realState from "../assets/portfolio/realestate.jpg";
import workImage from "../assets/portfolio/workImg.jpeg";
import covidDashboard from "../assets/portfolio/COVID_Dashboard.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: realState,
    },
    {
      id: 2,
      src: covidDashboard,
    },
    {
      id: 3,
      src: realState,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <a
                  href="https://ameersyed7340.github.io/COVID-19_dashboard/"
                  className="w-1/2 m-4"
                >
                  <button className="px-6 py-3 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/AmeerSyed7340/COVID-19_dashboard"
                  className="w-1/2 m-4"
                >
                  <button className="px-6 py-3 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
