import React, { useEffect } from 'react'
import { PiWind } from "react-icons/pi";
import { PiDropLight } from "react-icons/pi";
import { PiEye } from "react-icons/pi";

import MainCityInfoBox from './MainCityInfoBox/MainCityInfoBox';



export default function MainCity() {

  return (
    <>
        <div className='rounded-3xl flex flex-col items-center justify-between bg-gradient-to-t from-blue-600 via-blue-400 to-blue-300 p-5 text-gray-100 overflow-hidden h-full'>
            <div className='flex flex-col mr-auto font-NunitoLight text-lg'>
              <span>Today, 02 jun 2025</span>
              <span>Sydney</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-NunitoLight text-xl'>Mostly Clear</span>
              <span className='text-[116px] leading-[0.8] font-NunitoBold text-transparent bg-gradient-to-b from-white via-white/70 to-white/5 bg-clip-text'>24°</span>
              <img src='/images/weather-status/mostly_clear.png' alt="" className='w-52 h-52 -mt-20'/>
            </div>
            <div className='flex items-center w-full justify-around'>
              <MainCityInfoBox title='Wind' data='9 km / h' icon={<PiWind className='w-8 h-8'/>}/>
              <span className='w-[1px] h-11 bg-white/60 rounded-full'></span>
              <MainCityInfoBox title='Humidity' data='25 %' icon={<PiDropLight className='w-8 h-8'/>}/>
              <span className='w-[1px] h-11 bg-white/60 rounded-full'></span>
              <MainCityInfoBox title='Visibility' data='17 km' icon={<PiEye className='w-8 h-8'/>}/>
            </div>
        </div>
    </>
  )
}
