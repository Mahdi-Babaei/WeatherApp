import React from "react";
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";
import CustomTooltip from "./CustomTooltip";
import ChartData, { data } from "./ChartData";

export default function OverviewChart ({ activeChart , setActiveChart }) {
  return (
    <div className="w-full h-full select-none">
      <ChartData />
      <style>
        {`
          /* Chrome Svg Outline Bug fixed*/
          svg, svg * {
            outline: none !important;
          }
        `}
      </style>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 30, right: 20 , left: -10}} >
          <XAxis dataKey="day" stroke="var(--color-zinc-400)" />
          <YAxis unit={activeChart === 'Temperature' ? ' °C' : ' %'} domain={['auto', 'auto']} stroke="var(--color-zinc-400)" />
          <Tooltip content={<CustomTooltip activeChart={activeChart}/>} cursor={false} />
          <Line
            type="monotone"
            dataKey={activeChart === 'Temperature' ? 'temp' : activeChart === 'Humidity' ? 'hum' : 'rain'}
            name={activeChart}
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4, fill: "#3b82f6", style: { outline: 'none' } }}
            activeDot={{ r: 5, fill: "#3b82f6", style: { outline: 'none' } }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

