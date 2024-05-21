import React from "react";
import "./componentCss/pictureBox.css";
import { AuctionContext } from "../context/AuctionContext";
import { useContext } from "react";

const PictureBox = () => {
  const { auctionTypeCar } = useContext(AuctionContext);
  return (
    <img
      src={auctionTypeCar.carPng}
      className="leftBoxUpp"
      alt="picture of the auctioned car"
    />
  );
};

export default PictureBox;
