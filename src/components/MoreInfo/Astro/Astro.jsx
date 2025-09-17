import React from "react";
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";
import { WiMoonset } from "react-icons/wi";
import { WiMoonrise } from "react-icons/wi";

export default function Astro() {
  return (
    <>
      {/* Sun */}
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <BsSunrise className="w-12 h-12" />
          <span className="font-NunitoSemibold">Sunrise: 00:00</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <BsSunset className="w-12 h-12" />
          <span className="font-NunitoSemibold">Sunset: 00:00</span>
        </div>
      </div>

      {/* Moon */}
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <WiMoonrise className="w-12 h-12" />
          <span className="font-NunitoSemibold">Moonrise: 00:00</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <WiMoonset className="w-12 h-12" />
          <span className="font-NunitoSemibold">Moonset: 00:00</span>
        </div>
      </div>
    </>
  );
}
