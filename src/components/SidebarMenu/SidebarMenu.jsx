import React from 'react'
import { BiCategory } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import MenuItem from './MenuItem/MenuItem';
import { TbLogout } from "react-icons/tb";

let menuItems = [
    {title: 'category' , icon: <BiCategory  className='w-7 h-7'/>},
    {title: 'location' , icon: <IoLocationOutline  className='w-7 h-7'/>},
    {title: 'calender' , icon: <IoCalendarClearOutline className='w-7 h-7'/>},
    {title: 'explore' , icon: <MdOutlineExplore className='w-7 h-7'/>},
    {title: 'favorite' , icon: <FaRegStar  className='w-7 h-7'/>},
    {title: 'setting' , icon: <IoSettingsOutline className='w-7 h-7'/>},
]

export default function SidebarMenu() {
  return (
    <>
        <div className='h-full w-fit p-4 flex flex-col items-center divide-y divide-gray-300 bg-light-secondary rounded-2xl'>
            <div className='py-3 px-2'>
                logo
            </div>
            <div className='flex flex-col gap-y-2 py-3 px-2'>
                {menuItems.map(item => {
                    return <MenuItem {...item}/>
                })}
            </div>
            <div className='mt-auto cursor-pointer text-gray-500 hover:text-red-500 transition-all'>
                <TbLogout className='w-7 h-7 flex items-center justify-center'/>
            </div>
        </div>
    </>
  )
}
