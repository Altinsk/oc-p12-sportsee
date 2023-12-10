import React, { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    fill,
    payload,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const { value } = payload;
  const endAngle = (value / 100) * 360;
  return (
    <g>
      <text
        x={cx}
        y={cy - 20}
        dy={8}
        textAnchor="middle"
        style={{ fontSize: 25 }}
      >
        {value+ "%"}
      </text>
      <text x={cx} y={cy} dy={8} textAnchor="middle" style={{ fontSize: 15 }}>
        {"de votre"}
      </text>
      <text
        x={cx}
        y={cy + 12}
        dy={10}
        textAnchor="middle"
        style={{ fontSize: 15 }}
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

  console.log(userData);
  console.log(todayScore);
  console.log(data);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginRight: 80,
          marginLeft: 40,
          marginTop: 20,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            flex: 1,
          }}
        >
          <div>Score</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="35%"
            innerRadius={60}
            outerRadius={80}
            fill="white"
            dataKey="value"
          >
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
