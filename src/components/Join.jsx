import React from 'react';
import { Button } from 'react-bootstrap';
import Sele from '../assets/box2.png';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";


const CourseCard = ({ title, description }) => (
  <div className="w-full md:w-96 border mt-4 p-3 shadow-md rounded-lg">
    <div className="p-2 text-lg tracking-wider font-semibold">
      {title}
    </div>
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-2">
      <div className="w-full md:w-20 h-9 text-center bg-blue-200 rounded">
        <p className="mt-1 tracking-wide font-semibold">Online</p>
      </div>
      <div className="w-full md:w-20 h-9 text-center bg-yellow-100 rounded">
        <p className="mt-2 tracking-wide text-sm font-semibold">1.5 Months</p>
      </div>
      <div className="w-full md:w-24 h-9 text-center bg-green-200 rounded">
        <p className="mt-2 tracking-wide text-sm font-semibold">1.5 - 2 Hours</p>
      </div>
      <div className="w-full md:w-28 h-9 text-center bg-red-200 rounded">
        <p className="mt-2 font-semibold text-sm">Weekend Classes</p>
      </div>
    </div>
    <div className="p-2">
      <p className="text-sm">{description}</p>
    </div>
    <div className="flex justify-between items-center mt-3">
      <div className="sele-img">
        <img src={Sele} alt="Course" className="w-16 h-12" />
      </div>
      <Button className="ms-5 btn font-semibold">Enroll Now</Button>
    </div>
  </div>
);

const CoursesSection = () => (
  <div className="container mx-auto p-6">
    <div className="relative">
      
      <span><LiaChalkboardTeacherSolid style={{position:'absolute', top:"5px" , left:'5px'}} size={25}/></span>
      
      <h2 className="text-3xl font-semibold ms-10"> Join, Learn and Excel</h2>
      <p className='ms-10'>Join our training program to master your skills and elevate your career.</p>
    </div>
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-semibold"></h3>
      <Button className="btn px-4 py-2">View All</Button>
    </div>
    <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-4">
      <CourseCard 
        title="Selenium With Java"
        description="Write well-designed, testable, efficient code by using best software, Java development practices"
      />
      <CourseCard 
        title="Mobile Automation With Appium"
        description="Write well-designed, testable, efficient code by using best software, Java development practices"
      />
      <CourseCard 
        title="Cypress"
        description="Write well-designed, testable, efficient code by using best software, Java development practices"
      />
    </div>
  </div>
);

export default CoursesSection;
