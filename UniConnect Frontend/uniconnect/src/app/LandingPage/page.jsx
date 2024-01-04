// LandingPage.js
import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen bg-black">
        {/* Left Container */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 text-white">
          <h1 className="text-8xl font-bold mb-4">Connect With </h1> <h1 className=' text-8xl font-bold mb-4 text-indigo-500'>UniConnect</h1>
          <p className="text-gray-500 text-xl font-semibold">Lodge your grievances and gain support from your peers!</p><br/><br/><br/>
           <div className="flex space-x-8">
           <Link href="/LoginPage">
           <button className="bg-indigo-500 text-white px-6 py-3 rounded-full font-semibold">
              Get Started</button></Link> 
            <button className="border border-indigo-500 text-indigo-500 px-6 py-3 font-semibold rounded-full">View your Uni</button>
          </div>
        </div>

        {/* Right Container */}
        <div className="flex-1 flex items-center justify-center mt-8">
          <img src="/LPic.png" alt="LPic" className="max-w-lg max-h-lg" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
