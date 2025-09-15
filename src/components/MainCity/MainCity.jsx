import React, { useEffect, useState } from 'react'
import { PiWind } from "react-icons/pi";
import { PiDropLight } from "react-icons/pi";
import { PiEye } from "react-icons/pi";

import MainCityInfoBox from './MainCityInfoBox/MainCityInfoBox';
import useFetchData from '../../hooks/useFetchData';


export default function MainCity({city}) {
  const {fetchData , isLoading} = useFetchData('current' , city)

  return (
    <>
        {isLoading ? <p>Loading...</p> : !fetchData ? null : (
          <div className='rounded-3xl flex flex-col items-center justify-between bg-gradient-to-t from-blue-600 via-blue-400 to-blue-300 p-5 text-gray-100 overflow-hidden h-full'>
              <div className='flex flex-col mr-auto font-NunitoLight text-lg'>
                <span>Today, {fetchData.location.localtime}</span>
                <span>{fetchData.location.country}, {fetchData.location.name}</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='font-NunitoLight text-xl'>{fetchData.current.condition.text}</span>
                <span className='text-[116px] leading-[0.8] font-NunitoBold text-transparent bg-gradient-to-b from-white via-white/70 to-white/5 bg-clip-text'>{Math.round(fetchData.current.temp_c)}°</span>
                <img src='/images/weather-status/mostly_clear.png' alt="" className='w-52 h-52 -mt-20'/>
              </div>
              <div className='flex items-center w-full justify-around'>
                <MainCityInfoBox title='Wind' data={Math.round(fetchData.current.wind_kph)} unit='km / h' icon={<PiWind className='w-8 h-8'/>}/>
                <span className='w-[1px] h-11 bg-white/60 rounded-full'></span>
                <MainCityInfoBox title='Humidity' data={Math.round(fetchData.current.humidity)} unit='%' icon={<PiDropLight className='w-8 h-8'/>}/>
                <span className='w-[1px] h-11 bg-white/60 rounded-full'></span>
                <MainCityInfoBox title='Visibility' data={Math.round(fetchData.current.vis_km)} unit='km' icon={<PiEye className='w-8 h-8'/>}/>
              </div>
          </div>
        )}
    </>
  )
}
