import React, { useState } from "react";
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer , Legend} from "recharts";
import CustomTooltip from "./CustomTooltip";
import ChartData from "./ChartData";

export default function OverviewChart ({ activeChart , setActiveChart }) {
  const [chartData , setChartData] = useState([])
  return (
    <div className="w-full h-full select-none">
      <ChartData setChartData={setChartData}/>
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
          data={chartData}
          margin={{ top: 30, right: 20 , left: -10}} >
          <XAxis dataKey="day" stroke="var(--color-zinc-400)" />
          <YAxis unit={activeChart === 'Temperature' ? ' °C' : ' %'} domain={['auto', 'auto']} stroke="var(--color-zinc-400)" />
          <Tooltip content={<CustomTooltip activeChart={activeChart}/>} cursor={false} />
          <Legend verticalAlign="top"/>
          <Line
            type="monotone"
            dataKey={activeChart === 'Temperature' ? 'temp' : activeChart === 'Humidity' ? 'hum' : 'rain'}
            name={`${activeChart} ${activeChart !== 'Rainfall' ? `(Average)` : '(Chance)'} `}
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

