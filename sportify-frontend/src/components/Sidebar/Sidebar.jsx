import React from "react";
import "./Sidebar.css";
import IconYoga from "../../icons/IconYoga";
import Icon1 from "../../icons/png-Icons/icon (1).png";
import Icon2 from "../../icons/png-Icons/icon (2).png";
import Icon3 from "../../icons/png-Icons/icon (3).png";
import yogaPic from "../../icons/png-Icons/iconyoga.png";

const Drawer = () => {
  return (
    <section className="sidebar">
      <article className="icons">
        <div className="side-icons side-icon--extra">
          <img src={yogaPic} alt="Icon1" />
        </div>
        <div className="side-icons">
          <img src={Icon1} alt="Icon1" />
        </div>
        <div className="side-icons">
          <img src={Icon2} alt="Icon2" />
        </div>
        <div className="side-icons">
          <img src={Icon3} alt="Icon3" />
        </div>
      </article>

      <p className="vertical-text">Copyright, SportSee 2020</p>
    </section>
  );
};

export default Drawer;
