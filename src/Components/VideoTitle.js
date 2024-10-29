import React from 'react'
import { FaPlay } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";

const VideoTitle = ({title,overview}) => {
  
  

  return (
    <div className='w-screen aspect-video pt-[18%] px-20 z-20  absolute bg-gradient-to-r from-black'>
      <h1 className='title text-[64px] font-semibold text-white uppercase leading-tighter'>{title}</h1>
      <p className=' text-zinc-400 py-1 text-[17px] w-[550px] tracking-tight leading-normal'>{overview}</p>
      <div className='flex gap-8 mt-5'>
        <div className='bg-red-600 text-white w-fit px-7 py-3 text-md rounded-sm flex items-center gap-2 justify-center font-semibold hover:bg-red-700 cursor-pointer '> <FaPlay />Play Now</div>
        <div className='bg-gray-100 cursor-pointer text-black w-fit px-7 py-3 text-md rounded-sm flex items-center gap-2 justify-center font-semibold hover:bg-gray-300'> <BsInfoCircleFill /> More Info</div>
       
      </div>
    </div>
  )
}

export default VideoTitle