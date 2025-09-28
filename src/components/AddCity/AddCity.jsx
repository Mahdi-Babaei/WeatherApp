import React from 'react'
import { GoPlus } from "react-icons/go";


export default function AddCity() {
  return (
    <div className='flex items-center gap-x-5 border-2 border-dashed border-gray-400 dark:border-white/20 rounded-xl xl:rounded-3xl px-2 2xl:px-5 select-none h-20 md:h-24'>
        <button aria-label="Add Button" className='h-16 min-w-16 rounded-xl bg-light-secondary dark:bg-dark-secondary flex items-center justify-center shadow-sm'>
            <GoPlus className='w-10 h-10'/>
        </button>
        <p className='font-NunitoLight text-xl text-zinc-500 w-52 lg:w-auto 2xl:w-52'>Add the cities you are interested in.</p>
    </div>
  )
}
