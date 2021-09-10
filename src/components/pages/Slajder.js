import React, { useState, useEffect } from "react";
var i = 0;
const Slajder = ({ galerija }) => {
  const [img, setImg] = useState(galerija[0]);
  useEffect(() => {
    setImg(galerija[0]);
  }, [galerija]); //postavljanje prve slike

  const nextImage = () => {
    i++;
    if (i >= galerija.length) {
      i = 0;
    }
    console.log(i, galerija[i]);
    setImg(galerija[i]);
  };
  const prevImage = () => {
    i--;
    if (i < 0) {
      i = galerija.length - 1;
    }
    console.log(i, galerija[i]);
    setImg(galerija[i]);
  };  //jedno levo i desno

  return (
    <div>
      <div className="slider-container">
        <i className="fas fa-chevron-left" onClick={() => prevImage()}></i>

        <img className="slider-img" src={img} alt="" />

        <i className="fas fa-chevron-right" onClick={() => nextImage()}></i>
      </div>
    </div>
  );
};

export default Slajder;
