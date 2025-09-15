import React from 'react'
import useFetchData from '../../hooks/useFetchData';

export default function OtherCity({city}) {
    const {fetchData , isLoading} = useFetchData('current' , city)

  return (
    <>
      {isLoading ? <p>Loading...</p> : !fetchData ? null : (
        <div className='flex justify-between items-center bg-dark-secondary rounded-3xl px-5'>
            <img src={fetchData.current.condition.icon} className='w-20 h-20'/>
            <div>
                <h3 className='font-NunitoRegular text-xl'>{fetchData.location.name}</h3>
                <span className='font-NunitoLight tracking-wide'>{fetchData.current.condition.text}</span>
            </div>
            <h2 className='text-7xl font-NunitoBold'>{Math.round(fetchData.current.temp_c)}°</h2>
        </div>
      )}
    </>
  )
}
