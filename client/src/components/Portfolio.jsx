import React from "react";
import sevenWoks from "../assets/portfolio/sevenwoks.jpg";
import covidDashboard from "../assets/portfolio/COVID_Dashboard.jpg";
import fakeStore from "../assets/portfolio/fakestore.jpg";
import posterPort from "../assets/portfolio/posterPort.jpg";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Ai Generated Posters",
      src: posterPort,
      linkDemo: "https://ameersyed7340.github.io/PosterPort/",
      linkRepo: "https://github.com/AmeerSyed7340/PosterPort",
      description: "S",
    },
    {
      id: 2,
      title: "COVID-19 Dashboard",
      src: covidDashboard,
      linkDemo: "https://ameersyed7340.github.io/COVID-19_dashboard/",
      linkRepo: "https://github.com/AmeerSyed7340/COVID-19_dashboard",
    },
    {
      id: 3,
      title: "Seven Woks - Digital Menu",
      src: sevenWoks,
      linkDemo: "https://shino022.github.io/project_enid/",
      linkRepo: "https://github.com/eynid/project_enid",
    },    
    {
      id: 4,
      title: "Fake Store Simulator",
      src: fakeStore,
      linkDemo: "https://ameersyed7340.github.io/Shopping-Cart/",
      linkRepo: "https://github.com/AmeerSyed7340/Shopping-Cart",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white  pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, linkDemo, linkRepo, title }) => (
            <div>
              <p className="text-center pb-2">{title}</p>
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />

                <div className="flex items-center justify-center">
                  <a href={linkDemo} className="w-1/2 m-4">
                    <button className="px-6 py-3 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>

                  <a href={linkRepo} className="w-1/2 m-4">
                    <button className="px-6 py-3 duration-200 hover:scale-105">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
