import React , {useContext} from "react";
import {CityContext} from '../../../context/City'
import { GoPlus } from "react-icons/go";
import 'animate.css';


export default function SearchBoxModal({ fetchData , setIsSearchModalOpen , setSearchBoxValue}) {
    const {setCity , setFavCities} = useContext(CityContext)
    
  return (
    <>

      <div className="rounded-2xl bg-light-secondary dark:bg-dark-secondary mt-2 p-2 absolute z-10 text-xl font-NunitoSemibold w-full flex flex-col gap-y-1 animate__animated animate__slideInUp">
        {fetchData.length ? (
            <>
                {fetchData.map((item) => {
                return (
                    <div className="rounded-xl p-4 cursor-pointer hover:bg-light-primary dark:hover:bg-dark-primary/50 transition-all flex items-center justify-between">
                      <span className="w-2/4 line-clamp-2"  onClick={() => {
                          setSearchBoxValue('')
                          setCity(item.name)
                          setIsSearchModalOpen(false)
                        }}>
                        {item.country}, {item.name}
                      </span>
                      <span className="flex items-center text-blue-400 text-base hover:pr-1 transition-all min-w-[145px]" onClick={() => {
                          setFavCities(prev => {
                            let setArray = new Set([...prev , item.url])
                            return [...setArray]
                          })
                          setSearchBoxValue('')
                          setIsSearchModalOpen(false)
                        }}>
                        <GoPlus className="w-6 h-6"/>
                        Add to Favorites
                      </span>
                    </div>
                );
                })}
                <div className="p-4 mt-4 text-base text-blue-300">Not listed? Enter full city / country name</div>
            </>
        ) : (
          <div className="rounded-xl p-4 text-gray-500">Type City or Country Name...</div>
        )}
      </div>
    </>
  );
}
