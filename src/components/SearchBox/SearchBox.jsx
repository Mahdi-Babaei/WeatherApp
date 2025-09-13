import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function SearchBox() {
  return (
    <>
        <div className='rounded-2xl p-4 flex items-center gap-x-1 bg-dark-secondary text-gray-400 h-12'>
            <CiSearch className='w-7 h-7'/>
            <input type="text"  placeholder='Search City ...' className='w-full placeholder:text-gray-400 placeholder:font-NunitoLight border-none outline-none'/>
        </div>
    </>
  )
}
