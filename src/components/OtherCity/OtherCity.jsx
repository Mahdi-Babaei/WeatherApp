import React from 'react'
import useFetchData from '../../hooks/useFetchData';

export default function OtherCity({city}) {
    const {fetchData , isLoading} = useFetchData('current' , city)

  return (
    <>
      {isLoading ? <p>Loading...</p> : !fetchData ? null : (
        <div className='grid grid-cols-3 items-center  bg-light-secondary dark:bg-dark-secondary rounded-xl 2xl:rounded-3xl px-2 2xl:px-5 shadow-sm'>
            <img src={fetchData.current.condition.icon} className='w-20 h-20'/>
            <div>
                <h3 className='font-NunitoRegular text-xl'>{fetchData.location.name}</h3>
                <span className='font-NunitoLight tracking-wide'>{fetchData.current.condition.text}</span>
            </div>
            <h2 className='text-6xl 2xl:text-7xl font-NunitoBold text-right'>{Math.round(fetchData.current.temp_c)}°</h2>
        </div>
      )}
    </>
  )
}
