import React from "react";
import {
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  Bar,
  Line,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

function TopFiveChart({ linedata }) {
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

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4242"];

  return (
    <ResponsiveContainer>
      <ComposedChart data={linedata ? linedata : data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#006726" stopOpacity={0.8} />
            <stop offset="75%" stopColor="#006726" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={linedata ? "firstname" : "name"} axisLine={false} />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" align="right" height={16} />
        <CartesianGrid stroke="#f5f5f5" />
        <Area
          type="monotone"
          fill="url(#colorUv)"
          dataKey={linedata ? "Total" : "amt"}
          //   fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey={linedata ? "Total" : "pv"} barSize={20} fill="#413ea0">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
        <Line
          type="monotone"
          dataKey={linedata ? "Total" : "uv"}
          stroke="#ff7300"
          strokeWidth={4}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default TopFiveChart;
