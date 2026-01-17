import React from 'react'
import first from "../assets/first.svg";
import second from "../assets/second.svg";
import third from "../assets/third.svg";

const Describe = () => {
  return (
    <div className='flex flex-col items-center px-4 md:px-16 py-20'>
        <h1 className='text-black text-4xl text-center font-bold md:text-6xl leading-snug mb-2 max-w-3xl'>Create Perfect Images, Effortlessly</h1>
        <p className="text-gray-800 text-center mt-5 text-lg md:text-xl max-w-3xl italic">Transform your learning experience with our innovative platform designed for modern students. Preparing for exams is challenging enough - let us simplify the process.</p>
        <div className=' max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-15 mt-24 p-4'>
            <div className='bg-white flex flex-col border rounded-2xl md:w-1/3 p-8 '>
                <img className='w-10 border-0 bg-gray-200 rounded p-2' src={first} alt="" />
                <h3 className='text-black text-lg font-bold mt-5 '>Pure Simplicity</h3>
                <p className='text-gray-800 mt-4 text-lg'>Powerful image editing made effortless. We remove complexity so you can edit, enhance images without learning curves.</p>
            </div>
            <div className='bg-white flex flex-col border rounded-2xl md:w-1/3 p-9 '>
                <img className='w-10 border-0 bg-gray-200 rounded p-2' src={second} alt="" />
                <h3 className='text-black text-lg font-bold mt-5 '>Tools At Your Fingertips</h3>
                <p className='text-gray-800 mt-4 text-lg'>From background removal to upscaling enhancement, our AI tools work instantly — delivering professional results in seconds.</p>
            </div>
            <div className='bg-white flex flex-col border rounded-2xl md:w-1/3 p-9 '>
                <img className='w-10 border-0 bg-gray-200 rounded p-2' src={third} alt="" />
                <h3 className='text-black text-lg font-bold mt-5 '>Faster Image Editing</h3>
                <p className='text-gray-800 mt-4 text-lg'>Save time with optimized workflows and intelligent automation. Edit smarter with a unified platform built for speed and quality.</p>
            </div>
        </div>
    </div>
  )
}

export default Describe