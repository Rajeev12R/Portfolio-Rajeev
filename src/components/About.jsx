import React from 'react'

const About = () => {
  return (
    <div id="about" className='max-w-[700px] m-auto mt-20 bg-[#fbfbfb] p-6 rounded-lg shadow-lg'>
        <div className='flex flex-col justify-start text-left'>
            <h1 className='font-bold font-sans text-[50px] mb-1'><span className='text-teal-400'>~ </span>Rajeev Ranjan</h1>
            <div className='flex flex-row'>
            <p className="text-sm">Building:&nbsp; 
                <span className='text-gray-800 font-semibold'>
                    Campus
                    <span className='text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-300'>Stay</span>
                </span>
                <span>, </span>
                <span className='text-gray-500 font-semibold'>
                    FraudDetector
                </span>
                <span> and other great stuffs...</span>
            </p>
            </div>
            <div className='mt-10'>
                <p className="text-xl text-zinc-500">A second year B.Tech student at LPU, building websites and apps. Always learning, exploring tech, and chilling with side projects.</p>
            </div>
        </div>
    </div>
  )
}

export default About
