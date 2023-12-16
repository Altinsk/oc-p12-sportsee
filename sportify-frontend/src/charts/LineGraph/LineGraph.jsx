import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Dot,
  Rectangle,
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

const CustomDot = ({ cx, cy, index, data }) => {
  if (index === 0 || index === data.length - 1) {
    return null;
  }
  return (
    <Dot
      cx={cx}
      cy={cy}
      fill="#fff"
      r={4}
      stroke="#ffffff50"
      strokeWidth={10}
    />
  );
};
const CustomCursor = ({ points, width }) => {
  const { x } = points[0];
  return <Rectangle fill="#00000010" x={x} width={width} height={260} />;
};

export default function LineGraph(props) {
  let { data } = { ...props };
  data =
    data?.map((item) => ({ ...item, label: daysObject[item?.day] || "" })) ||
    [];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: 2,
            fontSize: 10,
          }}
        >
          <p>{`${payload[0].value}min`}</p>
        </div>
      );
    }

    return null;
  };

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
          opacity={0.6}
        >
          <text
            x={30}
            y={30}
            fill="#faf9f6"
            textAnchor="start"
            dominantBaseline="central"
          >
            <tspan>Durée moyenne des</tspan>
            <tspan x={30} dy={20}>
              sessions
            </tspan>
          </text>

          <XAxis
            dataKey="label"
            height={55}
            tick={<CustomizedAxisTick />}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey="sessionLength"
            type="number"
            domain={["dataMin", "dataMax + 60"]}
            hide
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
            style={{ backgroundColor: "black" }}
          />

          <Line
            type="natural"
            whiteSpace="break-spaces"
            dataKey="sessionLength"
            stroke="#faf9f6"
            dot={false}
            strokeWidth={1}
            activeDot={<CustomDot data={data} />}
          />
        </LineChart>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff40" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
      </ResponsiveContainer>
    </>
  );
}

function CustomizedAxisTick(props) {
  const { x, y, payload } = props;

  return (
    <>
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={38} textAnchor="end" fill="white">
          {payload.value}
        </text>
      </g>
    </>
  );
}
