import React from 'react'
import { PiWind } from "react-icons/pi";
import { PiDropLight } from "react-icons/pi";
import { PiEye } from "react-icons/pi";

import MainCityInfoBox from './MainCityInfoBox/MainCityInfoBox';


export default function MainCity() {
  return (
    <>
        <div className='rounded-2xl flex flex-col items-center justify-between gap-y-8 bg-gradient-to-t from-blue-600 via-blue-400 to-blue-300 w-80 h-80 p-5 text-gray-100'>
            <div className='flex flex-col mr-auto'>
              <span>Today, 02 jun 2025</span>
              <span>Sydney</span>
            </div>
            <div className='flex flex-col'>
              <span>Mostly Clear</span>
              <span>24</span>
              <span>icon</span>
            </div>
            <div className='flex items-center w-full justify-between'>
              <MainCityInfoBox title='Wind' data='9 km / h' icon={<PiWind className='w-8 h-8'/>}/>
              <span className='w-[1px] h-11 bg-white/60 rounded-full'></span>
              <MainCityInfoBox title='Humidity' data='25 %' icon={<PiDropLight className='w-8 h-8'/>}/>
              <span className='w-[1px] h-11 bg-white/60 rounded-full'></span>
              <MainCityInfoBox title='Visibility' data='1.7 km' icon={<PiEye className='w-8 h-8'/>}/>
            </div>
        </div>
    </>
  )
}
