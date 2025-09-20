import React, { useState } from 'react'
import OverviewChart from './OverviewChart/OverviewChart'

export default function Overview() {
    const [activeChart , setActiveChart] = useState('Temperature')
  return (
    <>
        <div className='bg-light-secondary dark:bg-dark-secondary p-4 rounded-xl 2xl:rounded-3xl flex flex-col justify-between h-full shadow-sm md:col-span-2'>
            <div className='flex flex-col xl:flex-row gap-y-2 items-center justify-between'>
                <h2 className='font-NunitoBold text-3xl'>Overview</h2>
                <div className='flex items-center justify-center rounded-3xl border border-gray-300 dark:border-white/20 p-1 text-gray-500/40'>
                    {['Temperature' , 'Humidity' , 'Rainfall'].map(item => {
                        return (
                            <h3 className={`py-2 px-4 cursor-pointer transition-all ${activeChart === item ? 'text-black dark:text-zinc-100 bg-light-primary dark:bg-zinc-800 rounded-3xl ' : 'text-gray-500/40 hover:text-black dark:hover:text-zinc-100 cursor-pointer'}`} onClick={() => setActiveChart(item)}>{item}</h3>
                        )
                    })}
                </div>
            </div>
            <OverviewChart activeChart={activeChart} setActiveChart={setActiveChart}/>
        </div>
    </>
  )
}
