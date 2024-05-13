import React from "react";
import "./componentCss/pictureBox.css";
import { AuctionContext } from "../context/AuctionContext";
import { useContext } from "react";


const PictureBox = () => {
    const { auctionTypeCar } = useContext(AuctionContext);
  return (
    <div className="leftBoxUpp">{auctionTypeCar.carPng}</div>
  )
}

export default PictureBox
