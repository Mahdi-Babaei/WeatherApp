import React from 'react'
import { GoPlus } from "react-icons/go";


export default function AddCity() {
  return (
    <div className='flex items-center gap-x-10 border-2 border-dashed border-white/20 rounded-3xl px-5 select-none cursor-pointer'>
        <button className='h-16 w-16 rounded-xl bg-dark-secondary flex items-center justify-center cursor-pointer'>
            <GoPlus className='w-10 h-10'/>
        </button>
        <p className='font-NunitoLight text-xl text-zinc-500 w-52'>Add the cities you are interested in.</p>
    </div>
  )
}
