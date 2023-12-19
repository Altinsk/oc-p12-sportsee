import "./Dashboard.css";
import BarGraph from "../../charts/BarGraph/BarGraph";
import LineGraph from "../../charts/LineGraph/LineGraph";
import RadarGraph from "../../charts/RadarGraph/RadarGraph";
import PieGraph from "../../charts/PieGraph/PieGraph";
import Stats from "../Stats/Stats";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* API */
import UserService from "../../service/data-provider";
import InvalidRoute from "../Invalidroute/InvalidRoute";

/**
 * @returns {JSX.Element} - Dash Board component
 */
export default function Dashboard() {
  const { id: userID } = useParams();
  const [userData, setUserData] = useState(null);
  const [userDataActivity, setUserDataActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userData, userActivity, userAverageSessions, userPerformance] =
          await Promise.all([
            UserService.fetchUserData(userID),
            UserService.fetchActivity(userID),
            UserService.fetchAverageSessions(userID),
            UserService.fetchUserPerformance(userID),
          ]);
        setUserData(userData);
        setUserDataActivity(userActivity);
        setUserAverageSessions(userAverageSessions);
        setUserPerformance(userPerformance);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [userID]);
  /**
   * @returns {Invalid} - 404 page
   */
  if (userData === null) return <InvalidRoute />;

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
              <BarGraph data={userDataActivity} />
            </div>

            <div className="flex-container">
              <LineGraph data={userAverageSessions} />

              <RadarGraph data={userPerformance} />

              <PieGraph data={userData} />
            </div>
          </article>
          <Stats userData={userData} />
        </main>
      </div>
    </div>
  );
}
