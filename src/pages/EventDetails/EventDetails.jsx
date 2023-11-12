import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Related from "../../components/EventDetails/Related";

const baseUrl = import.meta.env.VITE_APP_API_URL;

function HeroSection({ image, title, date }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className=" flex flex-col py-8 px-6 mx-4 h-96 my-2 rounded-lg"
      style={backgroundImageStyle}
    >
      <div className="my-14 flex mx-auto">
        <div className="">
          <h2 className="text-white font-bold text-8xl pb-4">{title}</h2>
          <p className="mt-4 text-xl text-white text-center">{new Date(date).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${baseUrl}/events/${eventId}`);
        setEvent(response.data.data);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchEvent();
  }, [eventId]);

  return (
    <div>
      <HeroSection
        image={event.image}
        title={event.eventName}
        date={event.dateTime}
      />
      <div>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 mx-10 my-12">
        <div className="p-6 border rounded-lg border-zinc-500">
            <h3 className="mt-4 text-2xl font-bold">Event Details</h3>
            <p className="mt-4 text-lg">{event.description}</p>
          </div>
        <div className="p-6 border rounded-lg border-zinc-500">
          <h3 className="mt-4 text-2xl font-bold">Event Location</h3>
          <p className="mt-4 text-lg">{event.location}</p>
        </div>

      </div>
      <div className="flex justify-center mt-12 space-x-4">
          <button className=" bg-black w-[10em] px-6 py-3 rounded text-white font-semibold hover:bg-transparent hover:border-black hover:border-2 transition hover:duration-500 ease-in-out hover:text-black">Book Tickets</button>
          <button className="border border-black rounded px-6 py-3 font-semibold hover:bg-black transition hover:duration-500 ease-in-out hover:text-white">Add to Calendar</button>
      </div>
      </div>
      <Related />
    </div>
  );
}

export default EventDetails;
