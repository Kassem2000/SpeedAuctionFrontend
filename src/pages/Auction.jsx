import React from "react";
import "./pageCss/createAuctionPage.css";
import HeroImage from "../components/HeroImage";

const Auction = () => {
  return (
    <HeroImage>
      <div className="auctioncontainer">
        <label className="pricelabel">
          <input type="text" name="startingPrice" placeholder="Price" />
        </label>
        <label className="endlabel">
          <input type="text" name="endOfAuction" placeholder="End Date" />
        </label>
      </div>
      <button>Next</button>
    </HeroImage>
  );
};
export default Auction;
