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
import PropTypes from "prop-types";

const daysObject = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};

/**
 * Custom Dot component for the chart
 * @param {number} props.cx x-coordinate for the dot
 * @param {number} props.cy y-coordinate for the dot
 * @param {number} props.index index of the dot.
 * @param {Array} props.data data array for the dots
 * @returns {JSX.Element|null} The rendered component, or null for specific indices.
 */
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

/**
 * Custom Cursor component for the chart
 * @param {Array} props.points - The points array for the cursor
 * @param {number} props.width - The width of the cursor
 * @returns {JSX.Element} The rendered component
 */
const CustomCursor = ({ points, width }) => {
  const { x } = points[0];
  return <Rectangle fill="#00000010" x={x} width={width} height={260} />;
};

export default function LineGraph(props) {
  let { data } = { ...props };
  data =
    data?.map((item) => ({ ...item, label: daysObject[item?.day] || "" })) ||
    [];

  /**
   * Custom Tooltip component for the chart
   * @param {object} payload - The payload for the tooltip
   * @returns {JSX.Element|null} The rendered component, or null if not active
   */
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

  /**
   * Customized Axis Tick component for the chart
   * @param {number} props.x x-coordinate for the tick
   * @param {number} props.y y-coordinate for the tick
   * @param {object} payload payload for the kick
   * @returns {JSX.Element} rendered customized axis ticks
   */
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
            dataKey="sessionLength"
            stroke="#faf9f6"
            fill="url(#gradient)"
            dot={false}
            strokeWidth={1}
            activeDot={<CustomDot data={data} />}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

LineGraph.propTypes = {
  data: PropTypes.array,
};
