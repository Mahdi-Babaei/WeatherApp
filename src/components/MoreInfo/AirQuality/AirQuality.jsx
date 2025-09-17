import React from "react";

export default function AirQuality() {
  return (
    <>
      <div className="flex flex-col gap-y-3">
        <h3 className="font-NunitoSemibold">Air Quality</h3>
        <div className="relative w-full bg-orange-300/70 h-3 rounded-full">
          <span className="h-3 rounded-full bg-orange-500 block absolute top-0 w-[30%]"></span>
          <span className="w-6 h-6 rounded-full bg-orange-500 border-2 block absolute -top-1.5 left-1/4"></span>
        </div>
        <div>
          <h6>Unhealthy</h6>
          <p className="text-base h-18">
            Limit strenuous outdoor activities, especially if you have a health
            condition.
          </p>
        </div>
      </div>
    </>
  );
}
