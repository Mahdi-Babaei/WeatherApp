import React from "react";

export default function MainCityInfoBox({title , data , icon}) {
  return (
    <>
      <div className="flex flex-col items-center">
        {icon}
        <span className="text-sm font-NunitoRegular">{data}</span>
        <span className="text-sm font-NunitoLight text-white/70">{title}</span>
      </div>
    </>
  );
}
