import React from "react";
import "./componentCss/heroImage.css";

const HeroImage = ({ children }) => {
  return <div className="heroImage">{children}</div>;
};

export default HeroImage;
