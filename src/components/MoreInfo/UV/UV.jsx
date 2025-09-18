import React, { useEffect, useState } from "react";
import useFetchData from '../../../hooks/useFetchData'

const UVconditions = [
  {title: 'Low' , desc: 'Minimal risk from the sun. You can still use sunglasses, especially on bright days.'} ,
  {title: 'Moderate' , desc: 'Seek shade, wear a hat and sunglasses, and use sunscreen with an SPF of 30 or higher'} ,
  {title: 'High' , desc: 'Reduce time in the sun, especially during midday. Take all precautions'} ,
  {title: 'Very High' , desc: 'Unprotected skin can burn in minutes. Stay in the shade and cover up'} ,
  {title: 'Extreame' , desc: 'The safest option is to stay indoors during midday hours. If you go out, take all possible precautions.' , epaIndex : 6 }
]


export default function UV({city}) {
  const {fetchData , isLoading} = useFetchData('current' , city , undefined , 'no')  
  const [uvWidth , setUVWidth] = useState(0)


  useEffect(() => {
    let uv = !isLoading && fetchData && fetchData.current.uv
    uv < 3 ? setUVWidth(0) : uv < 6 ? setUVWidth(25) : uv < 9 ? setUVWidth(50) : uv < 11 ? setUVWidth(75) : setUVWidth(95)

  })

  return (
    <>
      {isLoading ? <p>Loading ...</p> : !fetchData ? null : (
        <div className="flex flex-col gap-y-3">
          <h3 className="font-NunitoSemibold">UV Index</h3>
          <div
            className="relative w-full h-3 rounded-full"
            style={{
              background:
                "linear-gradient(90deg,rgba(65, 176, 0, 1) 0%, rgba(250, 204, 0, 1) 25%, rgba(227, 106, 0, 1) 50%, rgba(255, 0, 0, 1) 75%, rgba(128, 0, 219, 1) 100%)",
            }}>
            <span style={{left: `${uvWidth}%`}} className={`transition-all duration-1000 w-6 h-6 rounded-full border-2 block absolute -top-1.5 ${uvWidth == 95 ? 'bg-[#8000DB]' : uvWidth >= 75 ? 'bg-[#ff0000]' : uvWidth >= 50 ? 'bg-[#E36a00]' : uvWidth >= 25 ? 'bg-[#facc00]' : 'bg-[#41b000]'} `}></span>
          </div>
          <div>
            <h6>{uvWidth < 25 ? UVconditions[0].title : uvWidth < 50 ? UVconditions[1].title : uvWidth < 75 ? UVconditions[2].title : uvWidth < 95 ? UVconditions[3].title : UVconditions[4].title}</h6>
            <p className="text-base h-18">{uvWidth < 25 ? UVconditions[0].desc : uvWidth < 50 ? UVconditions[1].desc : uvWidth < 75 ? UVconditions[2].desc : uvWidth < 95 ? UVconditions[3].desc : UVconditions[4].desc}</p>
          </div>
        </div>
      )}
    </>
  );
}
