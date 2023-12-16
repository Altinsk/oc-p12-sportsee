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

export default function BarGraph(props) {
  let { data } = { ...props };
  data =
    data?.map((iterator, index) => ({ ...iterator, day: index + 1 })) || [];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "red",
            color: "white",
            padding: 10,
            fontSize: 10,
          }}
        >
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kcal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginRight: 20,
          marginLeft: 20,
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
        <div style={{ textAlign: "center", color: "#74798C" }}> Poids (kg)</div>
        <Dot color={"red"} />
        <div style={{ textAlign: "center", color: "#74798C" }}>
          {" "}
          Calories brulée (kCal)
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250} style={{ paddingTop: 45 }}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={10}
          barSize={12}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} tickMargin={18} />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="calories" fill="black" name="" radius={[5, 5, 0, 0]} />
          <Bar dataKey="kilogram" fill="red" name="" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
