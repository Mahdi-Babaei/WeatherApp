import React from "react";
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";
import { WiMoonset } from "react-icons/wi";
import { WiMoonrise } from "react-icons/wi";
import useFetchData from '../../../hooks/useFetchData'

export default function Astro({city}) {
    const {fetchData , isLoading} = useFetchData('astronomy' , city)

    
  return (
    <>
      {isLoading ? <p>Loading...</p> : !fetchData ? null : (
      <>
        {/* Sun */}
        <div className="flex items-center justify-between">
            <div className="flex flex-col 2xl:flex-row gap-x-2 items-center">
            <BsSunrise className="w-12 h-12" />
            <span className="font-NunitoSemibold">Sunrise: {fetchData.astronomy.astro.sunrise}</span>
            </div>
            <div className="flex flex-col 2xl:flex-row gap-x-2 items-center">
            <BsSunset className="w-12 h-12" />
            <span className="font-NunitoSemibold">Sunset: {fetchData.astronomy.astro.sunset}</span>
            </div>
        </div>
        {/* Moon */}
        <div className="flex items-center justify-between">
            <div className="flex flex-col 2xl:flex-row gap-x-2 items-center">
            <WiMoonrise className="w-12 h-12" />
            <span className="font-NunitoSemibold">Moonrise: {fetchData.astronomy.astro.moonrise}</span>
            </div>
            <div className="flex flex-col 2xl:flex-row gap-x-2 items-center">
            <WiMoonset className="w-12 h-12" />
            <span className="font-NunitoSemibold">Moonset: {fetchData.astronomy.astro.moonset}</span>
            </div>
        </div>
      </>
      )}
    </>
  );
}
