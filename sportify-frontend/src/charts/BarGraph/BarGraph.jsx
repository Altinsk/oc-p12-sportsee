import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function BarGraph(props) {
  const { data } = { ...props };

  return (
    <>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar barSize={10} dataKey="calories" fill="red" />
          <Bar barSize={10} dataKey="kilogram" fill="black" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
