import React from "react";
import System from "../assets/system.png";
import Speaker from "../assets/speaker.jfif";
import { Button } from "react-bootstrap";
const Achievements = () => {
  return (
    <div className="p-4 border border-blue-500 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Achievements</h2>
        <Button className="ms-5 btn font-semibold  px-4 py-2">View All</Button>

      </div>
      <p className="mb-4">
        MeetAhsan successful attainment of a goal or the accomplishment of a
        significant task or objective.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(3)
          .fill()
          .map((_, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="system-ltd">
                  <img
                    src={System}
                    alt="Systems Limited Logo"
                    className="w-16 mr-7"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl ms-1">
                    Systems Limited
                  </h3>
                  <span className="text-green-500 ms-1 text-1xl">Pakistan</span>
                </div>
              </div>
              <h4 className="mb-2 font-semibold">Appointed as a speaker</h4>
              <div className="grid grid-cols-3 gap-2">
                {Array(3)
                  .fill()
                  .map((_, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={Speaker}
                      alt="Speaker"
                      className="h-32 w-28 object-cover rounded-lg"
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Achievements;
