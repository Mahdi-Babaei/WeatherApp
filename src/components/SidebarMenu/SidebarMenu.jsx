import React , { useState } from 'react'
import { BiCategory } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import MenuItem from './MenuItem/MenuItem';
import { TbLogout } from "react-icons/tb";

let menuItems = [
    {title: 'dashboard' , icon: <BiCategory  className='w-7 h-7'/>},
    {title: 'location' , icon: <IoLocationOutline  className='w-7 h-7'/>},
    {title: 'calender' , icon: <IoCalendarClearOutline className='w-7 h-7'/>},
    {title: 'explore' , icon: <MdOutlineExplore className='w-7 h-7'/>},
    {title: 'favorite' , icon: <FaRegStar  className='w-7 h-7'/>},
    {title: 'setting' , icon: <IoSettingsOutline className='w-7 h-7'/>},
]

export default function SidebarMenu() {
    const [activeTab , setActiveTab] = useState('dashboard')

  return (
    <>
        <div className='h-full w-fit flex flex-col items-center divide-y divide-gray-300 dark:divide-gray-700  bg-light-secondary dark:bg-dark-secondary rounded-2xl shadow-xs p-4 text-gray-900 dark:text-zinc-100'>
            <a href='#' className='flex flex-col items-center pb-4'>
                <img src='/images/logo.png' className='w-9 h-9 object-cover'/>
                <span className='text-sm font-NunitoSemibold'>Weather</span>
            </a>
            <div className='flex flex-col gap-y-8 items-center py-8 w-full'>
                {menuItems.map(item => {
                    return <MenuItem {...item} activeTab={activeTab} setActiveTab={setActiveTab}/>
                })}
            </div>
            <div className='mt-auto cursor-pointer text-gray-500/40 hover:text-red-700/80 transition-all'>
                <TbLogout className='w-7 h-7 flex items-center justify-center'/>
            </div>
        </div>
    </>
  )
}
