import React from 'react'

export default function Overlay({setIsSearchModalOpen , setSearchBoxValue}) {
  return (
    <div className='bg-black/30 backdrop-blur-xl w-screen h-screen fixed z-20 left-0 top-0' onClick={() => {
      setIsSearchModalOpen(false)
      setSearchBoxValue('')
    }}></div>
  )
}
