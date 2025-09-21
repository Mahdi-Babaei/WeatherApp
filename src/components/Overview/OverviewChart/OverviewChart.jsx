import React, { useState , useContext } from "react";
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer , Legend} from "recharts";
import CustomTooltip from "./CustomTooltip";
import ChartData from "./ChartData";
import { GradeContext  } from "../../../context/Grade";

export default function OverviewChart ({ activeChart , setActiveChart }) {
  const [chartData , setChartData] = useState([])
  const {grade , setGrade} = useContext(GradeContext)

  return (
    <div className="w-full h-80 xl:h-full select-none">
      <ChartData setChartData={setChartData} grade={grade}/>
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
          margin={{ top: 30, right: 20 , left: -5}} >
          <XAxis dataKey="day" stroke="var(--color-zinc-400)" />
          <YAxis unit={activeChart === 'Temperature' ? `°${grade.toUpperCase()}`  : ' %'} domain={['dataMin', 'dataMax + 5']} stroke="var(--color-zinc-400)" />
          <Tooltip content={<CustomTooltip activeChart={activeChart}/>} cursor={false} grade={grade}/>
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

