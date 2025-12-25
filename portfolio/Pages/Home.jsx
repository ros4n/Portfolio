import React from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
const Home = () => {
  const textRef = useRef()
  const rosRef = useRef()
  const imgRef = useRef()
  useGSAP(() => {
    gsap.to(textRef.current, {
      rotateY: 180,
      duration: 1,
      repeat: -1,
      yoyo: true
    })
  })
  useGSAP(() => {
    gsap.from(rosRef.current, {
      y: -20,
      opacity: 0.5,
      duration: 2,
      ease: 'ease-in-out',
      repeat: -1,
      yoyo: true
    })
  })

  return (
    <><div className='hidden'>
    <div className='bg-blue-400 h-[600px]  px-20 py-15 rounded-3xl   my-0 mx-auto   overflow-hidden  hidden'>
      <div className='flex flex-col gap-10 w-1/2   '>
        <div className=''><p className='text-xl font-mont '>Hello I'm,</p></div>
        <div><p className='text-4xl mt-5 inline-block ' ref={rosRef} >Rosha</p><p className=' text-black  inline-block text-4xl mt-5 ' ref={textRef}>n</p> <p className='inline-block text-4xl mt-5'>Poudel</p></div>
        <div><p className='text-[18px]'>And I am a web developer</p></div>
        <div><p className='w-3/4'>Unlock success with tailored strategies, innovative solutions, and unwavering commitment. Embrace excellence and drive growth with us</p></div>
        <div className='flex gap-10 mt-10'>
          <button className='border-2-blue-600 rounded-xl h-12 w-20  bg-blue-600 text-white font-bold  transition-transform duration-100 hover:-translate-y-1 ease-in-out'>Hire Me</button>
          <button className='border-2-black rounded-xl h-12 w-30 bg-black text-white font-bold  transition-transform duration-100 hover:-translate-y-1 ease-in-out '>Contact Me</button>
        </div>
      </div>
      <div className='w-1/2 h-full '> 
      <div className='overflow-hidden rounded-full border-2  transition-all duration-500 w-3/4 h-auto mx-auto my-auto'>
      <img src="../src/Images/p_image.png" className='rounded-full transition-transform duration-500 hover:scale-[1.1] hover:translate-y-6 ease-in-out w-full ' alt="" />
      </div>
      </div>

    </div>
<div className='h-[800px] w-[900px] mx-auto  text-blue-200 rounded-2xl flex flex-col gap-5 p-3 sm:hidden'>
<img src="../src/Images/p_image.png" className='rounded-full h-70 border-2 max-w-70 mx-auto ' />
<div className='w-full  flex flex-col gap-4'>
<div className='w-full '><p className='text-xl font-mont '>Hello I'm,</p></div>
        <div><p className='text-4xl mt-5 inline-block ml-10 font-extrabold' ref={rosRef} >Rosha </p>
        <p className=' text-blue-200  inline-block text-4xl mt-5 ' ref={textRef}>n</p> <p className='inline-block ml-2 text-4xl mt-5 font-extrabold'>Poudel</p></div>
        <div className='w-full'><p className='text-[20px]'>And I am a web developer</p></div>
        <div><p className='w-full'>Unlock success with tailored strategies, innovative solutions, and unwavering commitment. Embrace excellence and drive growth with us</p></div></div>
        <div className='flex gap-4 mt-10'>
          <button className='border-2-blue-600 rounded-xl h-12 w-20  bg-blue-600 text-white font-bold   transition-transform duration-[50s] hover:transform-y-6 ease-out'>Hire Me</button>
          <button className='border-2-black rounded-xl h-50 w-50 bg-black text-white font-bold transition-transform duration-[50s] hover:transform-y-6 ease-out'>Contact Me</button>
        </div>

</div></div>
<div></div>
    </>
  )
}

export default Home
