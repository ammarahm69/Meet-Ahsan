// GalleryComponent.jsx

import React from 'react';
import { Button } from 'react-bootstrap';
import { RiGalleryFill } from "react-icons/ri";


const GalleryComponent = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 mt-5">
      <div className="flex justify-between items-center mb-6">
        <div className='relative'>
        <span><RiGalleryFill style={{position:'absolute', left:'-8%',top:'8px'}} size={25}/></span>
          <h2 className="text-3xl font-semibold text-gray-900"> Explore Our Gallery</h2>
          <p className="text-gray-500 mt-3">Explore vibrant images capturing moments of creativity, diversity, and everyday life</p>
        </div>
        <Button className="ms-5 btn font-semibold  px-4 py-2">View All</Button>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-gray-200 h-48"></div>
        <div className="bg-gray-200 h-48"></div>
        <div className="bg-gray-200 h-48"></div>
        <div className="bg-gray-200 h-48"></div>
      </div>
    </div>
  );
};

export default GalleryComponent;
