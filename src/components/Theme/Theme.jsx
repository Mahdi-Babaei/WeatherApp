import React, { useContext } from "react";
import { HiOutlineMoon } from "react-icons/hi2";
import { LuSun } from "react-icons/lu";
import { ThemeContext } from "../../context/Theme";


export default function Theme() {
    const {theme , setTheme} = useContext(ThemeContext)

  return (
    <>
      <div className="border border-white/20 rounded-3xl h-12 w-28 text-gray-500/40 relative items-center shadow-sm hidden xl:flex">
        <div className="grid grid-cols-2 w-full z-10 relative cursor-pointer" onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>
          <LuSun className={`w-7 h-7 mx-auto ${theme === 'light' ? 'text-black' : ''}`}/>
          <HiOutlineMoon className={`w-7 h-7 mx-auto  ${theme === 'dark' ? 'text-zinc-100' : ''}`} />
        </div>
        <span className={`bg-light-secondary dark:bg-dark-secondary rounded-full h-full w-1/2 absolute top-0 ${theme === 'dark' ? 'translate-x-full' : ''} z-0 transition-all`}></span>
      </div>
      <div className="border border-white/20 rounded-full h-12 w-12 shadow-sm flex items-center justify-center xl:hidden">
        <div onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? (
            <HiOutlineMoon className={`w-7 h-7`} />
          ) : (
            <LuSun className={`w-7 h-7`}/>
          )}
        </div>
      </div>
    </>
  );
}
