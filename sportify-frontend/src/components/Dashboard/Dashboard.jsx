import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import BarGraph from "../../charts/BarGraph/BarGraph";
import LineGraph from "../../charts/LineGraph/LineGraph";
import RadarGraph from "../../charts/RadarGraph/RadarGraph";
import PieGraph from "../../charts/PieGraph/PieGraph";
import Stats from "../Stats/Stats";

import {
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
  getUserById,
} from "../../service/axios-api";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
  USER_MAIN_DATA,
} from "../../constant/data";

export default function Dashboard() {
  const [activity, setActivity] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchActivity();
    fetchAverageSessions();
    fetchUserPerformance();
    fetchUserData();

    async function fetchUserData() {
      const response = await getUserById(18);
      setUserData(response?.data || USER_MAIN_DATA[0]);
    }

    async function fetchActivity() {
      const response = await getUserActivity(18);
      setActivity(response?.data?.sessions || USER_ACTIVITY[0].sessions);
    }

    async function fetchAverageSessions() {
      const response = await getUserAverageSessions(18);
      setAverageSessions(
        response?.data?.sessions || USER_AVERAGE_SESSIONS[0].sessions
      );
    }

    async function fetchUserPerformance() {
      const response = await getUserPerformance(18);
      setUserPerformance(response?.data?.sessions || USER_PERFORMANCE[0].data);
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="wrapper">
        <article className="disc">
          <h1>
            Bonjour{" "}
            <span style={{ color: "red" }}>
              {userData?.userInfos?.firstName}
            </span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
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

          <Stats userData={userData} />
        </main>
      </div>
    </div>
  );
}
