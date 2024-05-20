import { useContext } from "react";
import { AuctionProvider } from "../context/AuctionContext";
import { AuctionContext } from "../context/AuctionContext";
import InfoLabel from "../components/InfoLabel";
import "./pageCss/bidPage.css";
import HeroImage from "../components/HeroImage";

const BidPage = () => {
  const user = window.localStorage.getItem("user");
  const userContent = JSON.parse(user);
  let userId = userContent.id;
  console.log("ddd ", userId);
  return (
    <>
      <AuctionProvider>
        <HeroImage>
          <div className="auctionPage">
            <div className="upperBoxes">
              <div className="leftBoxUpp"></div>
              <div className="rightBoxUpp"></div>
            </div>
            <div className="lowerBoxes">
              <div className="leftBoxDown">
                <InfoLabel />
              </div>
              <div className="rightBoxDown"></div>
            </div>
          </div>
        </HeroImage>
      </AuctionProvider>
    </>
  );
};
export default BidPage;
