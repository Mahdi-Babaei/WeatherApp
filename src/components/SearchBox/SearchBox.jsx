import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import { CityContext } from '../../context/City'


export default function SearchBox() {
  const {city , setCity} = useContext(CityContext)

  const searchCity = (e) => {
    e.target.value ? setCity(e.target.value) : setCity('zanjan')

    e.target.value = ''
  }

  return (
    <>
        <div className='rounded-2xl p-4 flex items-center gap-x-1 bg-dark-secondary text-gray-100 h-12 font-NunitoLight tracking-wider'>
            <CiSearch className='w-7 h-7 cursor-pointer'/>
            <input type="text"  placeholder='Search City ...' className='w-full placeholder:text-gray-500 placeholder:font-NunitoLight border-none outline-none' onKeyDown={(e) => e.key === 'Enter' ? searchCity(e) : ''}/>
        </div>
    </>
  )
}
