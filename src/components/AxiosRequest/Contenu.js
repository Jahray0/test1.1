import React from "react";

const Contenu = ({ logement }) => {
  console.log(logement);
  return (
    <div>
      <div>{logement.title}</div>
      <div>
        <img src={logement.cover} alt="coucou"></img>
      </div>
    </div>
  );
};
export default Contenu;
