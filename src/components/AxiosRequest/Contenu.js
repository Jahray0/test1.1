import React from "react";

const Contenu = ({ logement }) => {
  console.log(logement);
  return (
    <div>
      <ul>
        <div>{logement.title}</div>
        <div>
          <img src={logement.cover} alt="coucou"></img>
        </div>
      </ul>
    </div>
  );
};
export default Contenu;
