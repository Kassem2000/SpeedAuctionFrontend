import Thumbnail from "../components/Thumbnail";
import HeroImage from "../components/HeroImage";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import AuctionDisplayer from "../components/AuctionDisplayer";
import "./pageCss/homePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="heroHome">
        <button className="createAuctionButton">
          <Link to="/createAuction">
            <h3>Create Auction</h3>
          </Link>
        </button>
        <Filter />
      </div>
      <AuctionDisplayer />
    </div>
  );
};

export default HomePage;
