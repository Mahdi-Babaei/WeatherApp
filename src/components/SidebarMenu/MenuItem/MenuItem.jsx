import React from 'react'

export default function MenuItem({title , icon}) {
  return (
    <>
        <div className='py-2 cursor-pointer text-gray-500 hover:text-black transition-all' >
            {icon}
        </div>
    </>
  )
}
