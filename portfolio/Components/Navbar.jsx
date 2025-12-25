import React, { useContext, useReducer, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
const Navbar = () => {
  const [Underline, setUnderline1] = useState(false)
  const [showOption, setShowOption] = useState(false)
  const imgRef = useRef()
  useGSAP(() => {
    gsap.from(imgRef.current, {
      y: -10,
      opacity: 0.2,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
    })

  })
  return (
    <div>
      {/* <div className='flex justify-between sm:pt-7 p-1 hidden'>
        <img src="../src/Images/logo.png" ref={imgRef} className='w-20 scale-[3] ml-15 mt-5 sm:mt-0' />
        <div className='lg:flex sm:justify-between lg:w-1/3  lg:text-blue-400 lg:text-xl hidden text-xl'> 
          <div>
          <NavLink to='/' className='' >
            <p className='' >Home</p>
            <hr  className='hidden'/>
          </NavLink></div>
          <div>
          <NavLink to='/About'>
            <p className=''>About</p>
            <hr className='hidden'/>
          </NavLink></div>
          <div>
          <NavLink to='/Skills' >
            <p className=''>Skills</p>
            <hr className='hidden' />
          </NavLink></div>
          <div>
          <NavLink to='/Contact'>
            <p className=''>Contact</p>
            <hr  className='hidden'/>
          </NavLink></div>
        </div>
        <div className='sm:hidden'>
          <img src="../src/assets/dropdown_icon.png" className='h-5 transform rotate-180 mr-4 mt-5 relative z-50' alt="" onClick={()=>{
            setShowOption(!showOption);
          }} />
        </div>
        <div   className={showOption? 'w-[100px] h-[200px] absolute z-10 bg-amber-500':'hidden' } ></div>
      </div> */}
      <div>
        <div className={`w-[100vw] h-[100vh] bg-gray-700 absolute  top-0 transition-all duration-700 ease-in-out  z-10 ${showOption ? 'right-0' : '-right-[100vw]'} sm:hidden`}>
          <div className='p-7'>
            <img src='../src/assets/dropdown_icon.png' className='w-3 ' onClick={() => {
              setShowOption(!showOption)
              console.log('bottom clicked')
            }} alt="" /></div>
          <div className=' flex flex-col gap-8 items-center  text-white '>
            <button className='border-2 rounded-2xl w-1/2'>Home</button>
            <button className='border-2 rounded-2xl w-1/2'>About</button>
            <button className='border-2 rounded-2xl w-1/2'>Skills</button>
            <button className='border-2 rounded-2xl w-1/2'>Contacts</button>
          </div>
        </div>
        <div className=' h-20 overflow-hidden flex justify-between p-5 sm:px-25 sm:p-3 md:px-35 items-center w-[100vw]'>
          <img src="../src/Images/logo.png" alt="" className='h-15  ' />
          <div className='flex items-center rotate-180 sm:hidden ' ><img src='../src/assets/dropdown_icon.png' className='w-3' onClick={() => {
            setShowOption(!showOption)
            console.log('bottom clicked')
          }} alt="" />
          </div>
          <div className='sm:block hidden  sm:w-105  '><ul className=' flex  justify-between   '>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul></div>
        </div>

      </div>










    </div>
  )
}

export default Navbar

