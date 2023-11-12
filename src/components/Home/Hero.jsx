import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/home-1.png";


const Hero = () => {

  const backgroundImageStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <>
      <div className="bg-[#dfdfdf] flex flex-col py-8 px-6 mx-4 my-2 rounded-lg" >
        <div className="my-14">
            <div className="w-[20em]">
          <h2 className="text-black font-bold text-4xl pb-4">
            Discover. Connect. <span className="text-[#E75151]">Discover.</span>
          </h2>
          </div>
          <p className="font-light text-xl">Your event journey starts here</p>
          <Link to='/createevents'><button className="bg-black py-2 mt-4 px-6 text-white text-3xl font-normal font-['Italianno'] hover:bg-transparent hover:border-black hover:border-2 transition hover:duration-700 ease-in-out hover:text-black">Create Events</button></Link>
        </div>
      </div>
    </>
  );
};


export default Hero;
