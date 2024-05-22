import React from "react";
import "./componentCss/infoLabel.css";
import { AuctionContext } from "../context/AuctionContext";
import { useContext } from "react";

const InfoLabel = () => {
  const { auctionTypeCar, displayedAuction } = useContext(AuctionContext);
  return (
    <>
      <div className="label-left">
        <label>
          <h2 className="label1-1">Brand: {auctionTypeCar.brand}</h2>
        </label>
        <label>
          <h2 className="label1-2">Model: {auctionTypeCar.carModel}</h2>
        </label>
        <label>
          <h2 className="label1-3">
            Year Manufactured: {auctionTypeCar.yearManufactured}
          </h2>
        </label>
        <label>
          <h2 className="label1-4">
            Miles Driven: {auctionTypeCar.milesDriven}
          </h2>
        </label>
      </div>
      <div className="label-right">
        <label>
          <h2 className="label2-1">Color: {auctionTypeCar.color}</h2>
        </label>
        <label>
          <h2 className="label2-2">Plate Number: {auctionTypeCar.regNumber}</h2>
        </label>
        <label>
          <h2 className="label2-3">Condition: {auctionTypeCar.condition}</h2>
        </label>
        <label>
          <h2 className="label2-3">Bids: {displayedAuction.bidCount}</h2>
        </label>
      </div>
    </>
  );
};

export default InfoLabel;
