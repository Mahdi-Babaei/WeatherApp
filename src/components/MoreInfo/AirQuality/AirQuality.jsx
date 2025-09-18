import React, { useEffect, useState } from "react";
import useFetchData from '../../../hooks/useFetchData'

const AQconditions = [
  {title: 'Good' , desc: 'The air is clean and fresh. Perfect for outdoor fun!' , epaIndex : 1} ,
  {title: 'Moderate' , desc: 'Sensitive groups might consider taking it easy outdoors' , epaIndex : 2 } ,
  {title: 'Unhealthy for Sensitive Groups' , desc: 'Limit strenuous outdoor activities, especially if you have a health condition.' , epaIndex : 3 } ,
  {title: 'Unhealthy' , desc: 'Unhealthy air for everyone. Avoid prolonged time outdoors.' , epaIndex : 4 } ,
  {title: 'Very Unhealthy' , desc: 'The air is a health risk. Stay indoors and avoid all outdoor activity.' , epaIndex : 5 } ,
  {title: 'Dangerous' , desc: 'Emergency level air quality. A life-threatening risk. Remain indoors and do not go outside.' , epaIndex : 6 }
]

export default function AirQuality({city}) {
  const {fetchData , isLoading} = useFetchData('current' , city , undefined , 'yes')

  

  
  return (
    <>
      {isLoading ? <p>Loading....</p> : !fetchData ? null : (
        <div className="flex flex-col gap-y-3">
          <h3 className="font-NunitoSemibold">Air Quality</h3>
          <div className={`relative w-full h-3 rounded-full bg-orange-300/70`}>
            <span  className={`h-3 rounded-full block absolute top-0 w-2/5 bg-orange-500`}></span>
            <span className={`w-6 h-6 rounded-full border-2 block absolute -top-1.5 left-2/5 bg-orange-500`}></span>
          </div>
          <div>
            <h6 className="line-clamp-1">{AQconditions.filter(item => item.epaIndex === fetchData.current.air_quality['us-epa-index'])[0].title}</h6>
            <p className="text-base h-18">{AQconditions.filter(item => item.epaIndex === fetchData.current.air_quality['us-epa-index'])[0].desc}</p>
          </div>
        </div>
      )}
    </>
  );
}
