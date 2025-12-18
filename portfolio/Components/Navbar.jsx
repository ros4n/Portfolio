import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [Underline,setUnderline1] = useState(false)
  const[showOption,setShowOption]= useState(false)
  return (
    <div>
      <div className='flex justify-between sm:pt-7 p-1 '>
        <img src="../src/Images/logo.png"  className='w-20 scale-[3] ml-15 mt-5 sm:mt-0' />
        <div className='lg:flex sm:justify-between lg:w-1/3  lg:text-blue-400 lg:text-xl hidden text-xl'> 
          <div>
          <NavLink to='/' className='' >
            <p className=''>Home</p>
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
      </div>
    
    </div>
  )
}

export default Navbar

