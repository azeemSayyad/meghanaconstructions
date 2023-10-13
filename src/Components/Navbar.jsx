import React, { useState } from 'react'
import { FaTimes, FaBars } from "react-icons/fa"

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);

    // const links = [
    //     {
    //       id: 1,
    //       link: "Home",
    //     },
    //     {
    //       id: 2,
    //       link: "About",
    //     },
    //     {
    //       id: 3,
    //       link: "Projects",
    //     },
    //     {
    //       id: 4,
    //       link: "TimeLine",
    //     },
    //     {
    //       id: 5,
    //       link: "Skills",
    //     },
    //   ];

  return (
    <div className='bg-gradient-to-r from-sky-400 to-cyan-700 flex justify-between py-3 px-2 maxi:m-auto max-w-[1400px] min-w-[400px]'>

        {/**Logo */}
        <div className='text-white font-bold text-2xl'>
            MEGHANA CONSTRUCTIONS
        </div>

        {/** Pages */}
        <div className='gap-5 hidden md:flex'>
            <div className=' text-white hover:border hover:border-white rounded-md px-2 duration-100'>Home</div>
            <div className=' text-white hover:border hover:border-white rounded-md px-2 duration-100'>Projects</div>
            <div className=' text-white hover:border hover:border-white rounded-md px-2 duration-100'>About Us</div>
            <div className=' text-white hover:border hover:border-white rounded-md px-2 duration-100'>Contact Us</div>
        </div>


    <div className='md:hidden z-40 mr-3' onClick={()=>setIsMenu(!isMenu)}>
        {isMenu? <FaTimes fontSize={"30px"} style={{color:'white'}}/> : <FaBars fontSize={"30px"} style={{color:'white'}}/>}
    </div>

    {isMenu && (
        <div onDrag={()=>setIsMenu(false)} onClick={()=>setIsMenu(!isMenu)} className='flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-black z-30 '>
            <div className='px-4 py-6 text-2xl cursor-pointer capitalize font-medium text-gray-500 hover:text-white hover:scale-105 duration-200'>Home</div>
            <div className='px-4 py-6 text-2xl cursor-pointer capitalize font-medium text-gray-500 hover:text-white hover:scale-105 duration-200'>Projects</div>
            <div className='px-4 py-6 text-2xl cursor-pointer capitalize font-medium text-gray-500 hover:text-white hover:scale-105 duration-200'>About Us</div>
            <div className='px-4 py-6 text-2xl cursor-pointer capitalize font-medium text-gray-500 hover:text-white hover:scale-105 duration-200'>Contact Us</div>
        </div>
    )}

    </div>
  )
}

export default Navbar