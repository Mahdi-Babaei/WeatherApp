import React from 'react'

export default function OtherCity() {
  return (
    <>
    <div className='flex justify-between items-center bg-dark-secondary rounded-3xl px-5 h-full'>
        <img src='/images/weather-status/mostly_clear.png' className='w-24 h-24'/>
        <div>
            <h3 className='font-NunitoRegular text-xl'>New York</h3>
            <span className='font-NunitoLight tracking-wide'>Sunny</span>
        </div>
        <h2 className='text-7xl font-NunitoBold'>24</h2>
    </div>
    </>
  )
}
