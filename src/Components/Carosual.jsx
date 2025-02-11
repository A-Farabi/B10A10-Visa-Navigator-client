import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Carousel = () => {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-64 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold"><Typewriter words={['Simplify Your Visa Application']} loop={2}
              cursor
              cursorStyle="|">Simplify Your Visa Application</Typewriter></h2>
          <p className="mt-2 text-lg">Experience an easy and secure way to check requirements, apply, and track your visa status online.</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full bg-gradient-to-r from-blue-400 to-teal-500 h-64 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold"><Typewriter words={['Real-Time Application Tracking'] } loop={3}></Typewriter></h2>
          <p className="mt-2 text-lg">Stay updated on your visa application status anytime, anywhere.</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full bg-gradient-to-r from-green-500 to-cyan-500 h-64 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold"><Typewriter words={['Comprehensive Visa Information'] } loop={3}></Typewriter></h2>
          <p className="mt-2 text-lg">Get detailed information on visa requirements for different countries in one place.</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full bg-gradient-to-r from-purple-600 to-pink-600 h-64 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold"><Typewriter words={['Comprehensive Visa Information'] } loop={3}>Secure and Reliable Platform</Typewriter></h2>
          <p className="mt-2 text-lg">Your data is safe with our secure visa application process.</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
