import React, { useContext, useRef } from "react";
import { HiOutlineMoon } from "react-icons/hi2";
import { LuSun } from "react-icons/lu";
import { ThemeContext } from "../../context/Theme";


export default function Theme() {
    const {theme , setTheme} = useContext(ThemeContext)

  return (
    <>
      <div className="border border-white/20 rounded-3xl h-12 w-28 text-gray-500/40 relative flex items-center">
        <div className="grid grid-cols-2 w-full z-10 relative cursor-pointer" onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>
          <LuSun className={`w-8 h-8 mx-auto ${theme === 'light' ? 'text-gray-100' : ''}`}/>
          <HiOutlineMoon className={`w-8 h-8 mx-auto  ${theme === 'dark' ? 'text-gray-100' : ''}`} />
        </div>
        <span className={`bg-dark-secondary rounded-full h-full w-1/2 absolute top-0 ${theme === 'dark' ? 'translate-x-full' : ''} z-0 transition-all`}></span>
      </div>
    </>
  );
}
