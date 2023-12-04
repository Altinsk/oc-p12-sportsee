import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Cardio",
    A: 10,
  },
  {
    subject: "Intesite",
    A: 98,
  },
  {
    subject: "Vitesse",
    A: 86,
  },
  {
    subject: "Force",
    A: 99,
  },
  {
    subject: "Energy",
    A: 85,
  },
  {
    subject: "Endurance",
    A: 65,
  },
];

export default function RadarGraph(props) {
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
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="red"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
