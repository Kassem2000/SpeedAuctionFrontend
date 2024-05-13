import { AuctionProvider } from "../context/AuctionContext";

import InfoLabel from "../components/InfoLabel";
import "./pageCss/bidPage.css";
import HeroImage from "../components/HeroImage";
import Description from "../components/Description";

const BidPage = ({}) => {
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
              <div className="rightBoxDown">
                Description:
                <Description />
              </div>
            </div>
          </div>
        </HeroImage>
      </AuctionProvider>
    </>
  );
};
export default BidPage;
