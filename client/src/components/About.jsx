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

        <p className='text-xl mt-20 '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sit
          placeat ad illo error minus rem iure harum, tempora maiores recusandae
          dolores, officiis animi dignissimos mollitia, pariatur eaque! Ipsam
          illo iure nisi animi optio vitae! Saepe, modi? Vel molestiae
          perspiciatis enim ab est nisi placeat doloribus facere! Omnis, quae
          neque?
        </p>

        <br />

        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure
          numquam delectus harum deserunt dignissimos veniam eos. Nisi,
          exercitationem voluptatibus natus sed, reiciendis tenetur deleniti
          saepe pariatur tempora, incidunt aliquid placeat porro doloremque! Ut
          ipsam odit quod repudiandae. Excepturi, asperiores optio sunt iusto
          perferendis provident numquam maiores officia tempore dicta.
        </p>
      </div>
    </div>
  );
};

export default About;
