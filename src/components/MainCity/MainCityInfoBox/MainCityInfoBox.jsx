import React from "react";

export default function MainCityInfoBox({title , data , icon}) {
  return (
    <>
      <div className="flex flex-col items-center px-5">
        {icon}
        <span className="text-sm">{data}</span>
        <span>{title}</span>
      </div>
    </>
  );
}
