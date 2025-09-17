import React from "react";
import Astro from "./Astro/Astro";
import AirQuality from "./AirQuality/AirQuality";
import UV from "./UV/UV";


export default function MoreInfo() {
  return (
    <>
      <div className="bg-dark-secondary rounded-3xl flex flex-col gap-y-8 py-5 px-8 h-full text-xl font-NunitoLight">
          <h2 className="font-NunitoBold text-3xl">More Info</h2>
          <Astro />
          <div className="grid grid-cols-2 text-center gap-x-6">
            <AirQuality />
            <UV />
          </div>
      </div>
    </>
  );
}

