import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { CityContext } from '../../context/City'
import SearchBoxModal from './SearchBoxModal/SearchBoxModal';
import useFetchData from '../../hooks/useFetchData';


export default function SearchBox() {
  const [searchBoxValue , setSearchBoxValue] = useState('')
  const [isSearchModalOpen , setIsSearchModalOpen] = useState(false)
  const {city , setCity} = useContext(CityContext)
  const {fetchData , isLoading} = useFetchData('search' , searchBoxValue )


  const searchCity = (e) => {
    e.target.value.length >= 2 ? setSearchBoxValue(e.target.value) : setSearchBoxValue('')
    console.log(fetchData)
  }
  
  return (
    <> 
      <div className='relative'>
        <div className='rounded-2xl p-4 flex items-center gap-x-1 bg-dark-secondary text-gray-100 h-12 font-NunitoLight tracking-wider' onClick={() => setIsSearchModalOpen(true)}>
            <CiSearch className='w-7 h-7 cursor-pointer'/>
            <input type="text" placeholder='Search City ...' className='w-full placeholder:text-gray-500 placeholder:font-NunitoLight border-none outline-none' onKeyUp={(e) => searchCity(e)}/>
        </div>
        {isSearchModalOpen && <SearchBoxModal fetchData={fetchData} setCity={setCity} setIsSearchModalOpen={setIsSearchModalOpen}/>}
      </div>
    </>
  )
}
