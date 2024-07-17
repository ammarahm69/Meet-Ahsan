import React from 'react';
import { IoMdSchool } from "react-icons/io";

const courses = [
  { name: 'Website Development', icon: '🌐' },
  { name: 'Website Design', icon: '🎨' },
  { name: 'Graphic Designing', icon: '🖼️' },
  { name: 'Microsoft Excel', icon: '📊' },
  { name: 'Mobile App Development', icon: '📱' },
  { name: 'Data Science', icon: '📊' },
  { name: 'Amazon AWS', icon: '☁️' },
  { name: 'Javascript', icon: '📜' },
];

const Courses = () => {
  return (
    <div className="w-100 h-auto mx-auto p-10 courses-bg">
      <h2 className="text-3xl font-bold mb-1"><span><IoMdSchool/></span>A broad selection of courses</h2>
      <p className="mb-4">Extensive range of courses to choose from</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border cursor-pointer bg-white rounded-lg p-4 flex flex-col items-center justify-center"
          >
            <div className="text-4xl mb-2">{course.icon}</div>
            <p className='font-semibold'>{course.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
