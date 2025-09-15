import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", temp: 22 },
  { day: "Tue", temp: 25 },
  { day: "Wed", temp: 20 },
  { day: "Thu", temp: 23 },
  { day: "Fri", temp: 24 },
  { day: "Sat", temp: 21 },
  { day: "Sun", temp: 19 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dark-secondary text-gray-100 p-2 rounded shadow border border-gray-700 font-NunitoLight">
        <p>{label}</p>
        <p>Temperature: {payload[0].value}°C</p>
      </div>
    );
  }
  return null;
};

const OverviewChart = () => {
  return (
 <div className="w-full h-full select-none">
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
      <YAxis unit="°C" domain={['auto', 'auto']} stroke="var(--color-zinc-400)" />
      <Tooltip content={<CustomTooltip />} cursor={false} />
      <Line
        type="monotone"
        dataKey="temp"
        name="Temperature"
        stroke="#3b82f6"
        strokeWidth={2}
        dot={{ r: 4, fill: "#3b82f6", style: { outline: 'none' } }}
        activeDot={{ r: 5, fill: "#3b82f6", style: { outline: 'none' } }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>
  );
};

export default OverviewChart;
