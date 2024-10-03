import React from 'react';

const Freelance = () => {
  const ph = 918360426936; 

  return (
    <div className='text-left max-w-[700px] m-auto mt-28 bg-[#EFF6FF] border border-blue-200 p-6 rounded-md shadow-lg transition duration-300 hover:shadow-xl'>
      <h1 className="text-left font-semibold text-3xl text-zinc-950">Ready to collaborate? Let's Discuss.</h1>
      <p className='mt-2 mb-4 text-base font-light text-gray-700'>Drop your message and let's discuss your project.</p>
      
      <a 
        href={`https://wa.me/${ph}?text=I want to work on a project with you`} 
        target='_blank' 
        rel='noopener noreferrer' 
        className="mt-4 px-6 py-2 text-center font-bold bg-green-500 text-white rounded-lg transition duration-300 hover:bg-green-600 w-full"
      >
        Chat on WhatsApp
      </a>
      
      <hr className='my-6 bg-[#ffdab9] rounded-2xl bg-opacity-40 h-1' />

      <h3 className='mt-4 mb-3 text-lg font-medium text-gray-800'>Drop in your mail id and I will get back to you.</h3>
      <form className='relative my-4'>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder='rajeevcodes@gmail.com' 
          className='p-3 outline-none hover:outline-blue-200 bg-white rounded-lg border border-gray-300 w-full' 
        />
        <button 
          type="submit" 
          className='absolute right-1 top-1 p-3 font-bold h-10 bg-gray-100 text-gray-900 rounded w-28 transition duration-300 hover:bg-gray-200'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Freelance;
