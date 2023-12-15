import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function RadarGraph(props) {
  const { data: userPerformance } = { ...props };
  const data =
    userPerformance?.data?.map((iterator) => {
      return {
        ...iterator,
        kind: userPerformance?.kind[iterator?.kind] || "",
      };
    }) || [];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="70%"
        data={data.reverse()}
        style={{ backgroundColor: "#282d30", color: "green" }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          style={{ color: "#000000", fontSize: "11" }}
          tick={{ fill: "#ffffff", fontSize: 20 }}
        />

        <Radar
          name="Mike"
          dataKey="value"
          stroke="red"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
