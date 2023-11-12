import React from "react";
import { recentEvents } from "../../Services/data";

const Related = () => {
  return (
    <div className="container px-4 py-12 md:px-6">
      <h2 className="text-2xl font-bold">Related Events</h2>
      <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {recentEvents.map((events) => {
          return (
            <div className="p-6 border rounded-lg">
              <img
                src={events.image}
                className="w-full h-48 object-cover rounded-t-lg"
                width="300"
              />
              <h3 className="mt-4 text-lg font-bold">{events.title}</h3>
              <p className="text-sm text-zinc-500">{events.date}</p>
              <p className="mt-2 text-sm">{events.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Related;
