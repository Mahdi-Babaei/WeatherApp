import React from "react";

export default function UV() {
  return (
    <>
      <div className="flex flex-col gap-y-3">
        <h3 className="font-NunitoSemibold">UV Index</h3>
        <div
          className="relative w-full h-3 rounded-full"
          style={{
            background:
              "linear-gradient(90deg,rgba(65, 176, 0, 1) 0%, rgba(250, 204, 0, 1) 25%, rgba(227, 106, 0, 1) 50%, rgba(255, 0, 0, 1) 75%, rgba(128, 0, 219, 1) 100%)",
          }}>
          <span className="w-6 h-6 rounded-full bg-[#E36A00] border-2 block absolute -top-1.5 left-1/2 right-1/2 -translate-x-1/2"></span>
        </div>
        <div>
          <h6>High</h6>
          <p className="text-base h-18">
            Reduce time in the sun, especially during midday. Take all
            precautions.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
