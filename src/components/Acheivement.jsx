import React from "react";
import { Button } from "react-bootstrap";

import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import Company from "../assets/job.png";

const CourseCard = ({ title, description, image, status }) => (
  <div className="w-full md:w-96 border mt-4 p-3 shadow-md rounded-lg">
    <div className="p-2 text-lg tracking-wider font-semibold">
      <img src={image} alt="" />
      {title}
      <br />
      <div className="active w-100 flex">
        <div className="bg-green-600 dot relative mt-1"></div>
        <span className="text-gray-500 text-sm ms-1">{status}</span>
      </div>
    </div>
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-2">
      <div className="w-full md:w-20 h-9 text-center bg-blue-200 rounded">
        <p className="mt-1 tracking-wide font-semibold">Remote</p>
      </div>
      <div className="w-full md:w-20 h-9 text-center bg-yellow-100 rounded">
        <p className="mt-2 tracking-wide text-sm font-semibold">Full-time</p>
      </div>
      <div className="w-full md:w-36 h-9 text-center bg-green-200 rounded">
        <p className="mt-2 text-sm font-semibold">1 to 2 year experience</p>
      </div>
      {/* <div className="w-full md:w-28 h-9 text-center bg-red-200 rounded">
        <p className="mt-2 font-semibold text-sm">Weekend Classes</p>
      </div> */}
    </div>
    <div className="p-2">
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <div className="flex justify-between items-center mt-3">
      <p className="font-semibold">
        PKR 30k to 40k <span className="text-sm text-gray-400">/Monthly</span>
      </p>
      <Button className="ms-5 btn font-semibold">Apply Now</Button>
    </div>
  </div>
);

const AcheivementCard = () => (
  <div className="container mx-auto p-6">
    <div className="relative">
      <span>
        <LiaChalkboardTeacherSolid
          style={{ position: "absolute", top: "5px", left: "5px" }}
          size={25}
        />
      </span>
      <h2 className="text-3xl font-semibold ms-10">Jobs</h2>
      <p className="ms-10">
        Discover diverse job opportunities and advance your career with us.
      </p>
    </div>
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-semibold"></h3>
      <Button className="btn px-4 py-2">View All</Button>
    </div>
    <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-4">
      <CourseCard
        status="New York"
        image={Company}
        title="Inspire Fitness Co"
        description="Write well-designed, testable, efficient code by using best tools software, Java development practices"
      />
      <CourseCard
        status="New York"
        image={Company}
        title="Inspire Fitness Co"
        description="Write well-designed, testable, efficient code by using best tools software, Java development practices"
      />
      <CourseCard
        status="New York"
        image={Company}
        title="Inspire Fitness Co"
        description="Write well-designed, testable, efficient code by using best software, Java development practices"
      />
    </div>
  </div>
);

export default AcheivementCard;
