import React from "react";
import dayjs from "dayjs";
import {
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ClientLineCharts({ Linedata }) {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={Linedata ? Linedata : data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        height="100%"
        width="100%">
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#006726" stopOpacity={0.8} />
            <stop offset="75%" stopColor="#006726" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <XAxis
          dataKey={Linedata ? "tip_date" : "name"}
          axisLine={false}
          tickCount={8}
          tickLine={false}
          tickFormatter={formattingDate}
        />
        <YAxis />
        <Area
          dataKey={Linedata ? "tip" : "uv"}
          stroke="#006726"
          fill="url(#colorUv)"
          type="monotone"
          strokeWidth={5}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default ClientLineCharts;


function formattingDate(data) {
  let month = dayjs(data).get("month");

  if (month % 2 === 0) {
    return dayjs(data).format("MMM-YY");
  } else {
    return "";
  }
}