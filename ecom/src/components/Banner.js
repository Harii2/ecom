import React from 'react'
import {BsArrowLeft,BsArrowRight} from "react-icons/bs"
import {b1,b2,b3,b4,b5} from "../assets/index"

import { useState } from 'react'
const data = [
    {id:1,
    src:b1},
    {id:2,
    src:b2},
    {
        id:3,
        src:b3
    },
    {
        id:4,
        src:b4
    },{
        id:5,
        src:b5
    }
]

const Banner = () => {

  const [currSlide,setCurrSlide] = useState(0) ;

  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? 4 : (prev) => prev-1 )
  }

  const nextSlide = () => {
    setCurrSlide(currSlide === 4 ? 0 : (next)=> next+1)
  }
//   console.log(currSlide)
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
            <div style={{transform:`translateX(-${currSlide*100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
                <img className='w-screen h-full object-cover '
                loading='priority' src={data[currSlide].src} alt="img"/>
                {
                    data.map(eachItem => <img id={eachItem.id} src={eachItem.src} className='w-screen h-full object-cover' alt='img'/>)
                }
            </div>
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center
                justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white 
                active:bg-gray-900 duration-300'>
                    <BsArrowLeft size={24}/>
                </div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center
                justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white 
                active:bg-gray-900 duration-300'>
                    <BsArrowRight size={24}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner