import React from "react";
import "./componentCss/infoLabel.css";
import { AuctionContext } from "../context/AuctionContext";

const InfoLabel = () => {
  return (
    <>
      <div className="label-left">
        <label>
          <div className="label1-1">{}</div>
        </label>
        <label>
          <div className="label1-2"></div>
        </label>
        <label>
          <div className="label1-3"></div>
        </label>
        <label>
          <div className="label1-4"></div>
        </label>
      </div>
      <div className="label-right">
        <label>
          <div className="label2-1"></div>
        </label>
        <label>
          <div className="label2-2"></div>
        </label>
        <label>
          <div className="label2-3"></div>
        </label>
        <label>
          <div className="label2-3"></div>
        </label>
      </div>
    </>
  );
};

export default InfoLabel;
