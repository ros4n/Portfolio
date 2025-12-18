import React from 'react'

const Skills = () => {
  return (
    <>
    <div className='lg:h-[800px] h-[800px] bg-red-400 lg:px-10 lg:py-10 rounded-3xl flex  lg:flex-row px-20 py-10'>
      <div className='w-1/2'>
        <div className='overflow-hidden border-2 rounded-full w-3/4'>
      <img src="../src/Images/p_image.png"  className='transition-all duration-500 ease-in-out hover:scale-[1.2] transform hover:translate-y-8 ' alt="" />
      </div>
      </div>
      <div className='flex flex-col w-3/4 gap-10'>
      <div><p className='text-2xl font-bold' >Skills</p></div>
<div>
<p className='text-3xl font-extrabold'>Roshan Poudel</p></div>
<div >
<p className='text-[20px]'>As an experienced entrepreneur and business consultant, I’ve led companies as CEO in various industries. In the tours and travel sector, I helped businesses grow through smart strategies, key partnerships, and great customer service. As a CEO in consulting, I’ve guided businesses toward their goals. In IT, I’ve used technology to boost growth and improve efficiency. With a strong track record, I’m passionate about solving problems and driving success across different fields.</p></div>

  <div className='flex gap-10 mt-5'>
        <button className='border-2-blue-600 rounded-xl h-12 w-30  bg-blue-600 text-white font-bold relative hover:bottom-1 transition duration-3000'>Back Home</button>
        <button className='border-2-black rounded-xl h-12 w-35 bg-black text-white font-bold  relative hover:bottom-1 transition duration-3000'>Download CV</button>
        </div>
      </div>
      </div>
  
    </>
  )
}

export default Skills