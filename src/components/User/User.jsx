import React from 'react'

export default function User() {
  return (
    <>
        <div className='flex items-center gap-x-5'>
            <h2 className='font-NunitoSemibold text-xl'>Hi, John</h2>
            <img src="images/user.webp" alt="user" className='w-14 h-14 object-cover rounded-full'/>
        </div>
    </>
  )
}
