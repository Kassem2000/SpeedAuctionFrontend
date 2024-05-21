import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./pageCss/bidPage.css";
import HeroImage from "../components/HeroImage";
import Description from "../components/Description";
import PictureBox from "../components/PictureBox";
import BidInfo from "../components/BidInfo";
import InfoLabel from "../components/InfoLabel";
import { AuctionContext } from "../context/AuctionContext";

const BidPage = () => {
  const { id } = useParams();

  const { fetchAuctionById } = useContext(AuctionContext);

  useEffect(() => {
    fetchAuctionById(id);
  }, [id]);

  return (
    <HeroImage>
      <div className="auctionPage">
        <div className="upperBoxes">
          <PictureBox />
          <div className="rightBoxUpp">
            <BidInfo />
          </div>
        </div>
        <div className="lowerBoxes">
          <div className="leftBoxDown">
            <InfoLabel />
          </div>
          <div className="rightBoxDown">
            <h2 className="description-title">Description:</h2>
            <Description />
          </div>
        </div>
      </div>
    </HeroImage>
  );
};

export default BidPage;
