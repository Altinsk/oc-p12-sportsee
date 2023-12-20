import { Link } from "react-router-dom";
import "../Home/Home.css";

export let mockedData = false;
function handleClick() {
  mockedData = !mockedData;
  console.log("change", mockedData);

  return mockedData;
}

export default function Home() {
  return (
    <>
      <div className="main">
        <button onClick={handleClick} className="button">
          Changer état de data mocké
        </button>
        <Link to="/user/12" className="button">
          User 12
        </Link>
        <Link to="/user/18" className="button">
          User 18
        </Link>
      </div>
    </>
  );
}
