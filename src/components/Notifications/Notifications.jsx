import React from 'react'
import { GoBell } from "react-icons/go";

export default function Notifications() {
  return (
    <>
        <div className='w-12 h-12 rounded-full bg-dark-secondary flex items-center justify-center text-gray-100 cursor-pointer'>
            <div className='w-7 h-7 relative'>
                <GoBell className='w-full h-full'/>
                <div className='absolute top-0 -right-1'>
                    <span className='bg-blue-500 w-3 h-3 rounded-full absolute top-0 right-1'></span>
                    <span className='bg-blue-500 w-3 h-3 rounded-full animate-ping absolute top-0 right-1'></span>
                </div>
            </div>
        </div>
    </>
  )
}
