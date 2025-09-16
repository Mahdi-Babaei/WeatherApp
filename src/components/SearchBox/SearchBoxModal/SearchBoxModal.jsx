import React , {useContext} from "react";
import {CityContext} from '../../../context/City'

export default function SearchBoxModal({ fetchData }) {
    const {city , setCity} = useContext(CityContext)
    
  return (
    <>
      <div className="rounded-2xl bg-dark-secondary mt-2 p-2 absolute z-10 text-xl font-NunitoSemibold w-full flex flex-col gap-y-1">
        {fetchData.length ? (
            <>
                {fetchData.map((item) => {
                return (
                    <div className="rounded-xl p-4 cursor-pointer hover:bg-dark-primary/50 transition-all" onClick={() => setCity(item.name)}>
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
