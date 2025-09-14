import React, { useState } from 'react'
import OverviewChart from './OverviewChart/OverviewChart'

export default function Overview() {
    const [activeChart , setActiveChart] = useState('Temperature')
  return (
    <>
        <div className='bg-dark-secondary p-5 rounded-3xl flex flex-col justify-between h-full'>
            <div className='flex items-center justify-between'>
                <h2 className='font-NunitoBold text-3xl'>Overview</h2>
                <div className='flex items-center justify-center rounded-3xl border border-white/20 p-1 text-gray-500/40'>
                    {['Temperature' , 'Humidity' , 'Rainfall'].map(item => {
                        return (
                            <h3 className={`py-2 px-4 cursor-pointer transition-all ${activeChart === item ? 'text-gray-100 bg-zinc-800 rounded-xl' : 'text-gray-500/40 hover:text-zinc-100 cursor-pointer'}`} onClick={() => setActiveChart(item)}>{item}</h3>
                        )
                    })}
                </div>
            </div>
            <OverviewChart/>
        </div>
    </>
  )
}
