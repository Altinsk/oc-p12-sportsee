import IconFire from "../../icons/IconFire";
import proteinsPic from "../../icons/png-Icons/protein-icon.png";
import carbsIPic from "../../icons/png-Icons/carbs-icon.png";
import fatPic from "../../icons/png-Icons/fat-icon.png";

export default function Stats(props) {
  const { userData } = { ...props };

  return (
    <>
      <article className="dashboard__sidemenu">
        <div className="flex">
          <div className="bg-pink">
            <IconFire />
          </div>
          <div className="flex-col">
            <h4>{(userData?.keyData?.calorieCount || 0) + " (g)"} </h4>
            <p>calories</p>
          </div>
        </div>

        <div className="flex">
          <img src={proteinsPic} style={{ width: "4rem" }} alt="proteinsPic" />

          <div className="flex-col">
            <h4>{(userData?.keyData?.proteinCount || 0) + " (g)"} </h4>
            <p>proteins</p>
          </div>
        </div>

        <div className="flex">
          <img src={carbsIPic} style={{ width: "4rem" }} alt="carbsIPic" />

          <div className="flex-col">
            <h4>{(userData?.keyData?.carbohydrateCount || 0) + " (g)"} </h4>
            <p>glucides</p>
          </div>
        </div>

        <div className="flex">
          <img src={fatPic} style={{ width: "4rem" }} alt="fatPic" />

          <div className="flex-col">
            <h4>{(userData?.keyData?.lipidCount || 0) + " (g)"} </h4>
            <p>lupids</p>
          </div>
        </div>
      </article>
    </>
  );
}
