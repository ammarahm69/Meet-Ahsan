import React from 'react';
import Testi from '../assets/testino.png'
const testimonials = [
  {
    name: 'John Clerk',
    image: Testi,
    rating: 5,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    name: 'John Clerk',
    image: Testi,
    rating: 5,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    name: 'John Clerk',
    image: Testi,
    rating: 5,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }
];

const TestimonialCard = ({ image, name, rating, text }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2 bg-white">
    <div className="flex items-center mb-4">
      <img className="w-14 h-14  rounded-full mr-4" src={image} alt={name} />
      <div className="">
        <p className="text-gray-900 leading-none">{name}</p>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09L5.18 12.08.36 7.909l6.157-.526L10 1.7l3.484 5.683 6.157.526-4.82 4.171 1.057 5.81z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-700 text-base">{text}</p>
  </div>
);

const TestimonialsComponent = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
    <p className="text-gray-600 mb-6">Meet/san successful attainment of a goal or the accomplishment of a significant task or objective.</p>
    <div className="flex flex-wrap justify-center">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  </div>
);

export default TestimonialsComponent;
