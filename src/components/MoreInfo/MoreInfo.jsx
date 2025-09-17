import React from "react";
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";
import { WiMoonset } from "react-icons/wi";
import { WiMoonrise } from "react-icons/wi";
import Slider from '@mui/material/Slider';


export default function MoreInfo() {
  return (
    <>
      <div className="bg-dark-secondary rounded-3xl flex flex-col gap-y-8 py-5 px-8 h-full text-xl font-NunitoLight">
          <h2 className="font-NunitoBold text-3xl">More Info</h2>
          <div className="flex items-center justify-between">
              <div className="flex gap-x-2 items-center">
                  <BsSunrise  className="w-12 h-12"/>
                  <span className="font-NunitoSemibold">Sunrise: 00:00</span>
              </div>
              <div className="flex gap-x-2 items-center">
                  <BsSunset  className="w-12 h-12"/>
                  <span className="font-NunitoSemibold">Sunset: 00:00</span>
              </div>
          </div>
          <div className="flex items-center justify-between">
              <div className="flex gap-x-2 items-center">
                  <WiMoonrise  className="w-12 h-12"/>
                  <span className="font-NunitoSemibold">Moonrise: 00:00</span>
              </div>
              <div className="flex gap-x-2 items-center">
                  <WiMoonset  className="w-12 h-12"/>
                  <span className="font-NunitoSemibold">Moonset: 00:00</span>
              </div>
          </div>
          <div className="grid grid-cols-2 text-center gap-x-4">
            <div className="flex flex-col gap-y-3">
              <h3 className="font-NunitoSemibold">Air Quality</h3>
              <div className="relative w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-3 rounded-full">
                <span className="w-6 h-6 rounded-full bg-orange-500 border-2 block absolute -top-1.5 left-1/4"></span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur!</p>
            </div>
            <div className="flex flex-col gap-y-3">
              <h3 className="font-NunitoSemibold">UV Index</h3>
              <div className="relative w-full h-3 rounded-full" style={{background: 'linear-gradient(90deg,rgba(65, 176, 0, 1) 0%, rgba(250, 204, 0, 1) 25%, rgba(227, 106, 0, 1) 50%, rgba(255, 0, 0, 1) 75%, rgba(128, 0, 219, 1) 100%)'}}>
                <span className="w-6 h-6 rounded-full bg-[#E36A00] border-2 block absolute -top-1.5 left-1/2 right-1/2 -translate-x-1/2"></span>
              </div>
              <div>
                <h6>High</h6>
                <p className="text-base">Reduce time in the sun, especially during midday. Take all precautions. </p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

