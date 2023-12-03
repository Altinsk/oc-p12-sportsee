import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function LineGraph(props) {
  // HINT:
  const { data } = { ...props };

  return (
    <>
      <ResponsiveContainer width={"100%"} height={250}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 10,
          }}
          style={{ backgroundColor: "red" }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="sessionLength" stroke="white" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

function CustomizedAxisTick(props) {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="black"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
}
