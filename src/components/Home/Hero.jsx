import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/dark.webp";
import CookingImg from "../../assets/cooking.webp";
import HalloweenImg from "../../assets/halloween.webp";
import PartyImg from "../../assets/party.webp";


const Hero = () => {

  const backgroundImageStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <>
      <div className=" flex flex-col py-8 px-6 mx-4 my-2 rounded-lg" style={backgroundImageStyle} >
        <div className="my-14">
            <div className="w-[20em]">
          <h2 className="text-white font-bold text-4xl pb-4">
            Discover. Connect. <span className="text-[#E75151]">Discover.</span>
          </h2>
          </div>
          <p className="font-light text-xl text-white">Your event journey starts here</p>
          <Link to='/createevents'><button className="bg-black py-2 mt-4 px-6 shadow-lg text-white text-3xl font-normal font-['Italianno'] hover:bg-transparent hover:border-black hover:border-2 transition hover:duration-700 ease-in-out hover:text-white">Create Events</button></Link>
        </div>
      </div>
    </>
  );
};


export default Hero;
