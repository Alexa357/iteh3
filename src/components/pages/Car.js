import React from "react";
import Slajder from "./Slajder";
import { Redirect } from "react-router-dom";
//izabere automobil i prikaz na stranici
const Car = ({ carToShow }) => {
  return (
    <div className="car-container">
      <img
        className="car-img"
        src={carToShow.slika}
        alt={carToShow.title}
        width="100%"
      />
      <h2 className="car-title">
        {carToShow.brand} - {carToShow.title}
      </h2>
      <Slajder galerija={carToShow.galerija} />
    </div>
  );
};

export default Car;
