import proteinsPic from "../../icons/png-Icons/protein-icon.png";
import carbsIPic from "../../icons/png-Icons/carbs-icon.png";
import fatPic from "../../icons/png-Icons/fat-icon.png";
import caloriePic from "../../icons/png-Icons/calories-icon.png";
import "./Stats.css";
import PropTypes from "prop-types";

/**
 *
 * @returns {JSX.Element} - component
 */
export default function Stats(props) {
  const { userData } = { ...props };

  return (
    <>
      <article className="dashboard__sidemenu">
        <div className="flex">
          <img src={caloriePic} style={{ width: "4rem" }} alt="carbsIPic" />
          <div className="flex-col">
            <h4>{userData?.keyData?.calorieCount + "kCal"} </h4>
            <p>Calories</p>
          </div>
        </div>

        <div className="flex">
          <img src={proteinsPic} style={{ width: "4rem" }} alt="proteinsPic" />

          <div className="flex-col">
            <h4>{userData?.keyData?.proteinCount + "g"} </h4>
            <p>Proteins</p>
          </div>
        </div>

        <div className="flex">
          <img src={carbsIPic} style={{ width: "4rem" }} alt="carbsIPic" />

          <div className="flex-col">
            <h4>{userData?.keyData?.carbohydrateCount + "g"} </h4>
            <p>Glucides</p>
          </div>
        </div>

        <div className="flex">
          <img src={fatPic} style={{ width: "4rem" }} alt="fatPic" />

          <div className="flex-col">
            <h4>{userData?.keyData?.lipidCount + "g"} </h4>
            <p>Lipides</p>
          </div>
        </div>
      </article>
    </>
  );
}

Stats.propTypes = {
  calorieCount: PropTypes.number,
  proteinCount: PropTypes.number,
  carbohydrateCount: PropTypes.number,
  lipidCount: PropTypes.number,
};
