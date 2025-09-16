import React , {useContext} from "react";
import {CityContext} from '../../../context/City'
import 'animate.css';


export default function SearchBoxModal({ fetchData , setIsSearchModalOpen , setSearchBoxValue}) {
    const {city , setCity} = useContext(CityContext)
    
  return (
    <>
      <div className="rounded-2xl bg-dark-secondary mt-2 p-2 absolute z-10 text-xl font-NunitoSemibold w-full flex flex-col gap-y-1 animate__animated animate__slideInUp">
        {fetchData.length ? (
            <>
                {fetchData.map((item) => {
                return (
                    <div className="rounded-xl p-4 cursor-pointer hover:bg-dark-primary/50 transition-all" onClick={() => {
                        setCity(item.name)
                        setSearchBoxValue('')
                        setIsSearchModalOpen(false)
                    }}>
                    {item.country}, {item.name}
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
