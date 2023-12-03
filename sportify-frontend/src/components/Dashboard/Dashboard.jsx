import React, { useEffect, useState } from "react";
import "./dashboard.css";
import BarGraph from "../../component/BarGraph";
import LineGraph from "../../component/LineGraph";
import RadarGraph from "../../component/RadarGraph";
import PieGraph from "../../component/PieGraph";
import Stats from "./Stats";
import {
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../../service/axios-api";

export default function Dashboard() {
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    fetchActivity();
    fetchAverageSessions();
    fetchUserPerformance();

    async function fetchActivity() {
      const response = await getUserActivity(12);
      setActivity(response?.data?.sessions || null);
    }

    async function fetchAverageSessions() {
      const response = await getUserAverageSessions(12);
      setAverageSessions(response?.data?.sessions || null);
    }

    async function fetchUserPerformance() {
      const response = await getUserPerformance(12);
      setUserPerformance(response?.data?.sessions || null);
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="wrapper">
        <article className="disc">
          <h1>
            Bonjour <span style={{ color: "red" }}>Thomas</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, </p>
        </article>

        <main className="dashboard__main">
          <article className="graphs">
            <div className="graph1">
              <BarGraph data={activity} />
            </div>

            <div className="flex-container">
              <LineGraph data={averageSessions} />

              <RadarGraph data={userPerformance} />

              <PieGraph />
            </div>
          </article>

          <Stats />
        </main>
      </div>
    </div>
  );
}
