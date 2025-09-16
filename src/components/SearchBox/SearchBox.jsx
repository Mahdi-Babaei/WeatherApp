import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import SearchBoxModal from './SearchBoxModal/SearchBoxModal';
import useFetchData from '../../hooks/useFetchData';
import Overlay from '../Overlay/Overlay';

const regex = /^[A-Za-z\u0600-\u06FF]+(?:[ -][A-Za-z\u0600-\u06FF]+)*$/

export default function SearchBox() {
  const [isSearchModalOpen , setIsSearchModalOpen] = useState(false)
  const [searchBoxValue , setSearchBoxValue] = useState('')
  const {fetchData , isLoading} = useFetchData('search' , regex.test(searchBoxValue) ? searchBoxValue : ' ' )



  
  return (
    <> 
      <div className='relative'>
        <div className='rounded-2xl p-4 flex items-center gap-x-1 bg-dark-secondary text-gray-100 h-12 font-NunitoLight tracking-wider w-full' onClick={() => setIsSearchModalOpen(true)}>
            <CiSearch className='w-7 h-7 cursor-pointer'/>
            <input type="text" placeholder='Search City ...' className='w-full placeholder:text-gray-500 placeholder:font-NunitoLight border-none outline-none' onChange={(e) => setSearchBoxValue(e.target.value)}/>
        </div>
        {isSearchModalOpen && <SearchBoxModal fetchData={fetchData}/>}
      </div>
      <Overlay />
    </>
  )
}
