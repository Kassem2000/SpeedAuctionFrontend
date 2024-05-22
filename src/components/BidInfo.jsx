import React, { useContext, useEffect, useState } from "react";
import { AuctionContext } from "../context/AuctionContext";
import "./componentCss/bidInfo.css";

const BidInfo = () => {
  const { displayedAuction, addBid } = useContext(AuctionContext);
  const [bidAmount, setBidAmount] = useState(0);

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    if (displayedAuction._id) {
      await addBid(displayedAuction._id, bidAmount);
    } else {
      console.error("AuctionId is missing");
    }
  };

  return (
    <div className="bidInfo">
      <h2 className="created">Created: {displayedAuction.created_at}</h2>
      <label>
        <h2 className="box1">
          Starting bid: {displayedAuction.startingPrice} kr
        </h2>
      </label>
      <label>
        <h2 className="box2">Top bid: {displayedAuction.topBid} kr</h2>
      </label>
      <label>
        <h2 className="box3">
          Bid amount:
          <input
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
          />
        </h2>
      </label>
      <label>
        <h2 className="box4">Auction ends: {displayedAuction.endOfAuction}</h2>
      </label>
      <button className="grenClick" onClick={handleBidSubmit}>
        Place bid
      </button>
    </div>
  );
};

export default BidInfo;
