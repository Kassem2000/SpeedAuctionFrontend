import React from "react";
import "./componentCss/description.css";
import { AuctionContext } from "../context/AuctionContext";
import { useContext } from "react";

const Description = () => {
    const { auctionTypeCar } = useContext(AuctionContext);
  return (
    <>
    <div className="description">{auctionTypeCar.description}</div>
    </>
  )
  
};

export default Description;
