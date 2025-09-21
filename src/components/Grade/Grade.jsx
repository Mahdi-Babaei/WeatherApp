import React, { useContext } from 'react'
import { GradeContext } from "../../context/Grade";

export default function Grade() {
    const {grade , setGrade} = useContext(GradeContext)
  return (
    <>
        <div className="border border-white/20 rounded-3xl h-12 w-28 text-gray-500/40 relative items-center shadow-sm hidden xl:flex">
            <div className="grid grid-cols-2 w-full z-10 relative cursor-pointer text-center text-2xl font-NunitoSemibold" onClick={() => setGrade(prev => prev === 'c' ? 'f' : 'c')}>
                <span className={`${grade === 'c' ? 'text-black dark:text-zinc-100' : ''} transition-all`}>°C</span>
                <span className={`${grade === 'f' ? 'text-black dark:text-zinc-100' : ''} transition-all`}>°F</span>
            </div>
            <span className={`bg-light-secondary dark:bg-dark-secondary rounded-full h-full w-1/2 absolute top-0 ${grade === 'f' ? 'translate-x-full' : ''} z-0 transition-all`}></span>
        </div>
        <div className="border border-white/20 rounded-full h-12 w-12 shadow-sm flex items-center justify-center xl:hidden font-NunitoSemibold text-2xl">
          <div onClick={() => setGrade(prev => prev === 'c' ? 'f' : 'c')}>
            {grade === 'c' ? (
                <span className={`${grade === 'f' ? 'text-black dark:text-zinc-100' : ''} transition-all`}>°F</span>
            ) : (
                <span className={`${grade === 'c' ? 'text-black dark:text-zinc-100' : ''} transition-all`}>°C</span>
            )}
          </div>
        </div>
    </>
  )
}
