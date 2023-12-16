import "./Dashboard.css";
import BarGraph from "../../charts/BarGraph/BarGraph";
import LineGraph from "../../charts/LineGraph/LineGraph";
import RadarGraph from "../../charts/RadarGraph/RadarGraph";
import PieGraph from "../../charts/PieGraph/PieGraph";
import Stats from "../Stats/Stats";

import {
  userData,
  activity,
  averageSessions,
  userPerformance,
} from "../../service/data-provider";
/**
 * @returns {JSX.Element} - Dash Board component
 */
export default function Dashboard() {
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

              <PieGraph data={userData} />
            </div>
          </article>

          <Stats userData={userData} />
        </main>
      </div>
    </div>
  );
}
