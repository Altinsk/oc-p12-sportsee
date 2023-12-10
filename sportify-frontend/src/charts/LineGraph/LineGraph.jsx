import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const daysObject = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};

export default function LineGraph(props) {
  // HINT:
  let { data } = { ...props };
  data =
    data?.map((item) => ({ ...item, label: daysObject[item?.day] || "" })) ||
    [];

  console.log("data", data);

  return (
    <>
      <ResponsiveContainer width={"100%"} height={250}>
        <LineChart
          data={data}
          style={{ backgroundColor: "red" }}
          margin={{
            top: 20,
            right: 30,
            left: 40,
            bottom: 10,
          }}
        >
          <rect
            x={190}
            y={0}
            width="40%"
            height="100%"
            fill="black"
            opacity={0.3}
            style={{ position: "relative", zIndex: -1 }}
          />
          <XAxis
            dataKey="label"
            height={60}
            tick={<CustomizedAxisTick />}
            axisLine={false}
            tickLine={false}
          />
          <Legend
            wrapperStyle={{ top: 10, right: "20%" }}
            layout="horizontal"
            verticalAlign="top"
            align="center"
            iconSize={0}
          />
          <Tooltip />

          <Line
            type="natural"
            name="Durée moyenne des sessions"
            dataKey="sessionLength"
            stroke="white"
            dot={({ cx, cy, stroke, payload }) => {
              if (payload.label === "V") {
                return <circle cx={cx} cy={cy} r={6} fill={stroke} />;
              }
              return null;
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

function CustomizedAxisTick(props) {
  const { x, y, payload } = props;

  console.log("payload", payload);

  return (
    <>
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={30} textAnchor="end" fill="white">
          {payload.value}
        </text>
      </g>
    </>
  );
}
