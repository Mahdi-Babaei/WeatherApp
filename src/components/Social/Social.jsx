import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";




export default function Social() {
  return (
    <>
        <div className='flex items-center gap-x-4 text-zinc-500 '>
            <a target='_blank' href="https://github.com/mahdi-babaei" className='hover:text-black dark:hover:text-zinc-100 transition-all'>
                <FaGithub className='w-7 h-7'/>
            </a>
            <a target='_blank' href="https://t.me/lastxfighter" className='hover:text-black dark:hover:text-zinc-100 transition-all'>
                <FaTelegram className='w-7 h-7'/>
            </a>
            <a target='_blank' href="https://instagram.com/lastxfighter" className='hover:text-black dark:hover:text-zinc-100 transition-all'>
                <FaInstagram className='w-7 h-7'/>
            </a>
        </div>
    </>
  )
}
