import React, { useState } from 'react'

export default function Overview() {
    const [activeGraph , setActiveGraph] = useState('Temperature')
  return (
    <>
        <div className='bg-dark-secondary p-5 rounded-3xl flex flex-col gap-y-5'>
            <div className='flex items-center justify-between'>
                <h2 className='font-NunitoBold text-3xl'>Overview</h2>
                <div className='flex items-center justify-center rounded-3xl border border-white/20 p-1 text-gray-500/40'>
                    {['Temperature' , 'Humidity' , 'Rainfall'].map(item => {
                        return (
                            <h3 className={`py-2 px-4 cursor-pointer transition-all ${activeGraph === item ? 'text-gray-100 bg-zinc-800 rounded-xl' : 'text-gray-500/40 hover:text-zinc-100 cursor-pointer'}`} onClick={() => setActiveGraph(item)}>{item}</h3>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}
