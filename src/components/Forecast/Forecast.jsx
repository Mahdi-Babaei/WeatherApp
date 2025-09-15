import React from 'react'
import useFetchData from '../../hooks/useFetchData'

export default function Forecast() {
    const {fetchData , isLoading} = useFetchData('forecast' , 'zanjan' , '4')
    console.log(fetchData)
  return (
    <>
        {isLoading ? <p>Loading ...</p> : !fetchData ? null : (
            <div className='bg-dark-secondary rounded-3xl flex flex-col justify-between gap-y-5 py-5 px-8 h-full relative'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-NunitoBold text-3xl'>Next 7 Days</h2>
                    <span className='text-blue-400 font-NunitoSemibold text-lg cursor-pointer hover:text-blue-500 transition-all'>See All</span>
                </div>
                <div className='flex flex-col justify-between gap-y-5 h-full'>
                    
                    
                </div>
                <div className='bg-gradient-to-t from-blue-500 via-blue-400  to-blue-300 -mx-5 px-5 py-7 rounded-3xl'>
                    <div className='grid grid-cols-3 text-xl  font-NunitoLight'>
                        <h4 className='font-NunitoSemibold text-left'>Tommorow</h4>
                        <div className="flex items-center gap-x-2 justify-center">
                            <span>Icon</span>
                            <h5>Rainy</h5>
                        </div>
                        <h6 className='text-right'>24 / 17</h6>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}
