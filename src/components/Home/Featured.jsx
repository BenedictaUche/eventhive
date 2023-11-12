import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight, FaMap } from 'react-icons/fa';
import { featured } from '../../Services/data';
import { Link } from 'react-router-dom';

const Featured = () => {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => prevIndex + 1) % featured.length;
  }

  const prevSlide = () => {
    setStartIndex((prevIndex) => prevIndex === 0 ? featured.length - 1 : prevIndex - 1)
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${featured.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };


  return (
    <div className='mx-8'>
      <h2 className="py-8 font-['Montserrat'] font-bold text-2xl">Featured Events</h2>
      <div className='flex gap-3'>
        <div className='flex flex-col gap-4'>
          <div className='bg-gray-300 p-3 rounded-full cursor-pointer' onClick={nextSlide}>
          <FaArrowRight />
          </div>
          <div className='bg-gray-300 p-3 rounded-full cursor-pointer' onClick={prevSlide}>
          <FaArrowLeft />
          </div>
        </div>


        <div>
          <div className="card grid grid-cols-2 gap-4 border-[1px] border-l-black pl-4 font-['Montserrat'] items-center">
            {featured.slice(startIndex, startIndex+2).map((event) => {
              return (
                <Link to={`/event/${event.id}`}>
                <div key={event.id} className='text-black text-opacity-60'>
                  <img src={event.image} alt={event.title} className=''/>
                  <h3 className='font-bold text-black text-3xl py-3'>{event.title}</h3>
                  <p className='line-clamp-2 text-sm'>{event.description}</p>
                  <div className='flex justify-between py-3'>
                  <p>{event.date}</p>
                  <div className='inline-flex gap-2 items-center'>
                  <FaMap />
                  <p>{event.location}</p>
                  </div>
                  </div>
                </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Featured;
