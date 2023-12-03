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
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Intesite",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Vitesse",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Force",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Energy",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Endurance",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function RadarGraph() {
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
