import React from "react";
import "./componentCss/infoLabel.css";
import { AuctionContext } from "../context/AuctionContext";
import { useContext } from "react";

const InfoLabel = () => {
  const { auctionTypeCar } = useContext(AuctionContext);
  return (
    <>
      <div className="label-left">
        <label>
          <div className="label1-1">Model: {auctionTypeCar.carModel}</div>
        </label>
        <label>
          <div className="label1-2">Brand: {auctionTypeCar.brand}</div>
        </label>
        <label>
          <div className="label1-3">Year Manufactured: {auctionTypeCar.yearManufactured}</div>
        </label>
        <label>
          <div className="label1-4">Miles Driven: {auctionTypeCar.milesDriven}</div>
        </label>
      </div>
      <div className="label-right">
        <label>
          <div className="label2-1">Color: {auctionTypeCar.color}</div>
        </label>
        <label>
          <div className="label2-2">Plate Number: {auctionTypeCar.regNumber}</div>
        </label>
        <label>
          <div className="label2-3">Condition: {auctionTypeCar.condition}</div>
        </label>
        <label>
          <div className="label2-3">Bids: </div>
        </label>
      </div>
    </>
  );
};

export default InfoLabel;
