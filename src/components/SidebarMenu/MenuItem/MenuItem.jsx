import React, { useState } from 'react'

export default function MenuItem({title , icon , activeTab , setActiveTab}) {

  return (
    <>
        <div className={`py-2 cursor-pointer ${activeTab === title ? 'text-black' : 'text-gray-400 hover:text-black'} transition-all`} onClick={() => setActiveTab(title)}>
            {icon}
        </div>
    </>
  )
}
