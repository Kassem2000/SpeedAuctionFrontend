import { AuctionProvider } from "../context/AuctionContext";

import InfoLabel from "../components/InfoLabel";
import "./pageCss/bidPage.css";
import HeroImage from "../components/HeroImage";
import Description from "../components/Description";
import PictureBox from "../components/PictureBox";
import BidInfo from "../components/BidInfo";

const BidPage = ({}) => {
  return (
    <>
      <AuctionProvider>
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
      </AuctionProvider>
    </>
  );
};
export default BidPage;
