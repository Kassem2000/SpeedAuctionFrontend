import { Link } from "react-router-dom";
import { ThumbnailProvider } from "../context/ThumbnailContext";
import { useState } from "react";
import Filter from "../components/Filter";
import AuctionDisplayer from "../components/AuctionDisplayer";
import "./pageCss/homePage.css";

const HomePage = () => {
  const [filteredAuctions, setFilteredAuctions] = useState([]);

  const updateFilteredAuctions = (filterCombined) => {
    setFilteredAuctions(filterCombined);
  };

  return (
    <>
      <ThumbnailProvider>
        <div className="heroHome">
          <Link to="/createAuction" className="linkCreateAuction">
            <button className="createAuctionButton">
              <h3>Create Auction</h3>
            </button>
          </Link>
          <Filter setFilteredAuctions={updateFilteredAuctions} />
        </div>
        <AuctionDisplayer filterCombined={filteredAuctions} />
      </ThumbnailProvider>
    </>
  );
};

export default HomePage;
