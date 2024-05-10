import { Link } from "react-router-dom";
import { ThumbnailProvider } from "../context/ThumbnailContext";
import Thumbnail from "../components/Thumbnail";
import HeroImage from "../components/HeroImage";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import AuctionDisplayer from "../components/AuctionDisplayer";
import "./pageCss/homePage.css";

const HomePage = () => {
  return (
    <>
      <ThumbnailProvider>
        <div className="heroHome">
          <Link to="/createAuction" className="linkCreateAuction">
            <button className="createAuctionButton">
              <h3>Create Auction</h3>
            </button>
          </Link>
          <Filter />
        </div>
        <AuctionDisplayer />
      </ThumbnailProvider>
    </>
  );
};

export default HomePage;
