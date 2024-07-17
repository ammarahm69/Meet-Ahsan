import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="main-bg text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Logo and description */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
        <div className='bg-white h-24  w-56 ' style={{position:'relative'}}>
          <img src={Logo} style={{position:'absolute',top:'-2rem'}} />

        </div>
          <p className="text-sm mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2 ms-3">Quick Links</h3>
          <ul className="list-none">
            <li><a href="#" className="text-sm">Home</a></li>
            <li><a href="#" className="text-sm">Courses</a></li>
            <li><a href="#" className="text-sm">Events</a></li>
            <li><a href="#" className="text-sm">Workshop</a></li>
            <li><a href="#" className="text-sm">Gallery</a></li>
            <li><a href="#" className="text-sm">Admission</a></li>
          </ul>
        </div>
        
        {/* Courses */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2 ms-3">Courses</h3>
          <ul>
            <li><a href="#" className="text-sm hover:underline">UX / UI Course</a></li>
            <li><a href="#" className="text-sm hover:underline">Digital Marketing</a></li>
            <li><a href="#" className="text-sm hover:underline">Amazon</a></li>
            <li><a href="#" className="text-sm hover:underline">Web Development</a></li>
          </ul>
        </div>
        
        {/* Contact Us */}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-2 ms-3">Contact Us</h3>
          <p className="text-sm mb-2">
            <i className="fas fa-phone-alt mr-2"></i> +92 312 4338913
          </p>
          <p className="text-sm">
            <i className="fas fa-envelope mr-2"></i> info@meetahsan.com
          </p>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="font-semibold text-1xl">&copy; 2023 Meet Ahsan | All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
