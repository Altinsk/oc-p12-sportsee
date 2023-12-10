import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dot({ color }) {
  return (
    <div
      style={{
        width: "10px",
        height: "10px",
        marginTop: "7px",
        marginRight: "5px",
        marginLeft: "40px",
        backgroundColor: color,
        borderRadius: "50%",
      }}
    />
  );
}

// HINT: modified
export default function BarGraph(props) {
  let { data } = { ...props };
  data =
    data?.map((iterator, index) => ({ ...iterator, day: index + 1 })) || [];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginRight: 80,
          marginLeft: 40,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            flex: 1,
          }}
        >
          <div>Activité quotidienne</div>
        </div>
        <Dot color={"black"} />
        <div style={{ textAlign: "center" }}> Poids (kg)</div>
        <Dot color={"red"} />
        <div style={{ textAlign: "center" }}> Calories brulée (kCal)</div>
      </div>

      <br></br>

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

          <Bar dataKey="calories" fill="black" name="" />
          <Bar dataKey="kilogram" fill="red" name="" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
