import React from "react";
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";
import { WiMoonset } from "react-icons/wi";
import { WiMoonrise } from "react-icons/wi";


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
          <div className="grid grid-cols-2 text-center">
            <div>
              <h3 className="font-NunitoSemibold">Air Quality</h3>
              <input type="range" className="w-3/4 "/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur!</p>
            </div>
            <div>
              <h3 className="font-NunitoSemibold">UV Index</h3>
              <input type="range" className="w-3/4 "/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur!</p>
            </div>
          </div>
      </div>
    </>
  );
}

