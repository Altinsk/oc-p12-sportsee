import React from "react";
import "../Invalidroute/InvalidRoute.css"

const InvalidRoute = () => {
  return (
      <div className="invalid-container-center">
        <div >
          <h1 className="errorText">404</h1>
        </div>
        <div >
          <p className='errorDescription'>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div>
          <a href='/' className="returnButton">Retourner sur la page d’accueil</a>
        </div>
      </div>
  );
};

export default InvalidRoute;
