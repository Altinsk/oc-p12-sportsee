import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Cell,
  Label,
} from "recharts";
import PropTypes from "prop-types";

/**
 * Render active shape for the chart
 * @returns {JSX.Element} The rendered component, or null for specific indices.
 */
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, fill, payload } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const { value } = payload;
  const startAngle = -30;
  const endAngle = 210;
  return (
    <g>
      <text
        x={cx}
        y={cy - 20}
        dy={8}
        textAnchor="middle"
        style={{ fontSize: 25 }}
      >
        {value + "%"}
      </text>
      <text
        x={cx}
        y={cy}
        dy={16}
        textAnchor="middle"
        style={{ fontSize: 15, color: "#74798C", opacity: 0.5 }}
      >
        {"de votre"}
      </text>
      <text
        x={cx}
        y={cy + 12}
        dy={26}
        textAnchor="middle"
        style={{ fontSize: 15, color: "#74798C", opacity: 0.5 }}
      >
        {"objectif"}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} fill="none" />
    </g>
  );
};

const COLORS = ["red", "white"];

/**
 * Pie Chart component for displaying user's score
 * @param {number} props.score - The user's score
 * @returns {JSX.Element} The rendered component
 */
export default function PieGraph(props) {
  const [activeIndex] = useState(0);
  const { data: userData } = { ...props };
  const { todayScore, score } = { ...userData };

  const finalScore = todayScore || score || 0;
  const value = finalScore * 100;

  const data = [
    { name: "12% de votre", value },
    { name: "", value: 100 - value },
  ];

  return (
    <div
      style={{ backgroundColor: "#fbfbfb", maxHeight: 250, borderRadius: 10 }}
    >
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            flex: 1,
          }}
        ></div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={80}
            fill="white"
          />
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            fill="white"
            dataKey="value"
            startAngle={-285}
            cornerRadius={-10}
          >
            <Label
              position="center"
              dy={-90}
              dx={-90}
              style={{
                fontWeight: 350,
                fontSize: 16,
                lineHeight: 26,
                fill: "#20253A",
              }}
            >
              Score
            </Label>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

PieGraph.propTypes = {
  data: PropTypes.object,
};
