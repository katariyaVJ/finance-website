import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-white flex flex-col items-center justify-center font-sans px-4">
      
      {/* 404 Container */}
      <div className="flex items-center justify-center space-x-2 md:space-x-6 mb-8">
        {/* First 4 */}
        <span className="text-[120px] md:text-[220px] font-black text-[#0B1B32] leading-none tracking-tighter">
          4
        </span>

        {/* The Road "0" */}
        <div className="relative w-28 h-28 md:w-52 md:h-52 rounded-full bg-[#5A5A5A] flex items-center justify-center shadow-md">
          {/* Inner white circle */}
          <div className="absolute w-12 h-12 md:w-24 md:h-24 bg-white rounded-full z-10 shadow-inner"></div>

          {/* Continuous yellow line */}
          <div className="absolute w-20 h-20 md:w-36 md:h-36 rounded-full border border-yellow-400 z-10 opacity-70"></div>

          {/* Dashed line and cars container */}
          <div className="absolute w-20 h-20 md:w-36 md:h-36 rounded-full border-2 border-dashed border-white z-20 animate-[spin_6s_linear_infinite]">
            {/* Car 1 */}
            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 text-xl md:text-3xl rotate-90 drop-shadow-md">
              🏎️
            </div>
            {/* Car 2 */}
            <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 text-xl md:text-3xl -rotate-90 drop-shadow-md">
              🚙
            </div>
          </div>
        </div>

        {/* Second 4 */}
        <span className="text-[120px] md:text-[220px] font-black text-[#0B1B32] leading-none tracking-tighter">
          4
        </span>
      </div>

      {/* Text */}
      <h1 className="text-2xl md:text-4xl font-bold text-[#0B1B32] mb-10 text-center">
        Page not found
      </h1>

      {/* Button */}
      <Link 
        to="/" 
        className="px-10 py-3 md:py-4 md:px-12 bg-[#E1483D] hover:bg-[#c93d33] text-white font-bold rounded-lg transition-transform hover:scale-105 text-lg shadow-md"
      >
        Go home
      </Link>

    </div>
  );
}
