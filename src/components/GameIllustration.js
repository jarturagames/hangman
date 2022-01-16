import React from "react";
import imagen from "../images/GameIllustration.png";

const GameIllustration = () => {
  return (
    <section className="illustration">
      <img src={imagen} alt="Preview" title="Preview" className="Preview" />
    </section>
  );
};
export default GameIllustration;
