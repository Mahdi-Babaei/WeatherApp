import React, { useEffect, useState } from 'react'
import { PiWind } from "react-icons/pi";
import { PiDropLight } from "react-icons/pi";
import { PiEye } from "react-icons/pi";
import MainCityInfoBox from './MainCityInfoBox/MainCityInfoBox';
import useFetchData from '../../hooks/useFetchData';
import { GoArrowUp } from "react-icons/go";



export default function MainCity({city}) {
  const {fetchData , isLoading} = useFetchData('current' , city)

  const getDateFunc = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateObj = new Date()
    return `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()},`
  }

  return (
    <>
        {isLoading ? <p>Loading...</p> : !fetchData ? null : (
          <div className={`rounded-xl xl:rounded-3xl flex flex-col items-center justify-between gap-y-8 2xl:gap-y-0 bg-gradient-to-t ${fetchData.current.is_day ? 'from-blue-600 via-vlue-400 to-blue-300' : 'from-gray-950 via-blue-950 to-blue-800'}  p-5 text-zinc-100 overflow-hidden h-full`}>
              <div className='flex flex-col mr-auto font-NunitoLight text-lg'>
                <span>Today, {getDateFunc()} {fetchData.location.localtime.slice(-5)}</span>
                <span>{fetchData.location.country}, {fetchData.location.name}</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex items-center'>
                  <img src={fetchData.current.condition.icon} alt="" className='w-16 h-16'/>
                  <span className='font-NunitoLight text-xl -ml-1'>{fetchData.current.condition.text}</span>
                </div>
                <span className='text-9xl font-NunitoBold -mt-4'>{Math.round(fetchData.current.temp_c)}</span>
                <div className='font-NunitoLight text-lg'>
                  <div className='flex items-center justify-center gap-x-2 -ml-2'>
                    <span className='flex items-center'><GoArrowUp className='w-6 h-6'/>42°</span>
                    <span className='flex items-center'><GoArrowUp className='w-6 h-6 rotate-180'/>20°</span>
                  </div>
                  <span>Feels like 25°</span>
                </div>
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
