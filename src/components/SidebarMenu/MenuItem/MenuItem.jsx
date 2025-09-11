import React, { useState } from 'react'

export default function MenuItem({title , icon , activeTab , setActiveTab}) {

  return (
    <>
        <div className={`cursor-pointer ${activeTab === title ? 'text-gray-900 dark:text-zinc-100' : 'text-gray-400 hover:text-gray-900 dark:text-zinc-500 dark:hover:text-zinc-100'} transition-all`} onClick={() => setActiveTab(title)}>
            {icon}
        </div>
    </>
  )
}
