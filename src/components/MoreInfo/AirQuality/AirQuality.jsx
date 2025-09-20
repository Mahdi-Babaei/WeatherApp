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
  const [width , setWidth] = useState('100')
  
  useEffect(() => {
    let AQ = !isLoading && fetchData && fetchData.current.air_quality['us-epa-index']
    let widthValue = ((6 - AQ) / 5) * 100
    setWidth(widthValue)
  })

  
  return (
    <>
      {isLoading ? <p>Loading....</p> : !fetchData ? null : (
        <div className="flex flex-col gap-y-3">
          <h3 className="font-NunitoSemibold text-lg sm:text-xl">Air Quality</h3>
          <div className={`relative w-full h-3 rounded-full ${width == 100 ? 'bg-green-300/70' : width >= 60 ? 'bg-yellow-300/70' : width >= 20 ? 'bg-orange-300/70' : 'bg-red-300/70' }`}>
            <span style={{width: `${width}%`}}  className={`transition-all duration-1000  h-3 rounded-full block absolute top-0 ${width == 100 ? 'bg-green-500' : width >= 60 ? 'bg-yellow-500' : width >= 20 ? 'bg-orange-500' : 'bg-red-500' }`}></span>
            <span style={{left: `${width - 5}%`}}  className={`transition-all duration-1000  w-6 h-6 rounded-full border-2 block absolute -top-1.5 ${width == 100 ? 'bg-green-500' : width >= 60 ? 'bg-yellow-500' : width >= 20 ? 'bg-orange-500' : 'bg-red-500' }`}></span>
          </div>
          <div>
            <h6 className={`line-clamp-1 font-NunitoSemibold ${width == 100 ? 'text-green-500' : width >= 60 ? 'text-yellow-500' : width >= 20 ? 'text-orange-500' : 'text-red-500' }`}>{AQconditions.filter(item => item.epaIndex === fetchData.current.air_quality['us-epa-index'])[0].title}</h6>
            <p className="text-base h-18">{AQconditions.filter(item => item.epaIndex === fetchData.current.air_quality['us-epa-index'])[0].desc}</p>
          </div>
        </div>
      )}
    </>
  );
}
