import React, { useRef } from "react";
import { HiOutlineMoon } from "react-icons/hi2";
import { LuSun } from "react-icons/lu";

export default function Theme() {
  const circleElem = useRef(null);

  const activeThemeChanger = () => {

  }

  return (
    <>
      <div className="border border-white/20 rounded-3xl w-fit text-gray-500/40 relative">
        <div className="flex items-center gap-x-4 p-2 z-10 relative">
          <LuSun className="w-8 h-8" onClick={activeThemeChanger}/>
          <HiOutlineMoon className="w-8 h-8 text-gray-100" onClick={activeThemeChanger}/>
        </div>
        <span ref={circleElem} className="bg-dark-secondary rounded-full h-full w-1/2 absolute top-0 right-0 z-0"></span>
      </div>
    </>
  );
}
