import React, { useState } from 'react'

export default function MenuItem({title , icon , activeTab , setActiveTab}) {

  return (
    <>
        <div className={`cursor-pointer ${activeTab === title ? 'dark:text-gray-100' : 'text-gray-500/40 dark:hover:text-gray-100'} transition-all`} onClick={() => setActiveTab(title)}>
            {icon}
        </div>
    </>
  )
}
