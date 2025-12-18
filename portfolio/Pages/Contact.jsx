import React from 'react'
import Submitted from './Submitted'

const Contact = () => {
  return (
    <div className='w-[800px] h-[800px] rounded-2xl flex justify-between'>
  
  <div className='
    w-[45%] h-full bg-gray-400 p-10 rounded-2xl
    flex flex-col gap-3 hover:-translate-y-2
    transition-transform duration-300 ease-out
    
  '>

    <div>
      <p className='text-2xl font-extrabold'>Get In Touch With Me!</p>
      <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>

      <div className='flex flex-col gap-1 mt-10'>
        <p>NAME</p>
        <input className='border-2 border-gray-300 rounded-[10px] outline-none h-10' />

        <p className='mt-10'>EMAIL</p>
        <input className='border-2 border-gray-300 rounded-[10px] outline-none h-10' />

        <p className='mt-10'>MESSAGE</p>
        <textarea className='border-2 border-gray-300 rounded-[10px] outline-none h-30'></textarea>
      </div>
    </div>

    <button className='cursor-pointer bg-amber-500 rounded-[10px] h-10 w-20'>
      Send
    </button>

  </div>

  <div className='w-[45%] h-full bg-amber-200 rounded-2xl'></div>
</div>

  )
}

export default Contact