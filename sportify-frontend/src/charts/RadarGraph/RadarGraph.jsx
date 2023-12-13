import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
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
        outerRadius="80%"
        data={data}
        style={{ backgroundColor: "#282d30" }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />

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
