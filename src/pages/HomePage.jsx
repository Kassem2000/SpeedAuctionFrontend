import { Link } from "react-router-dom";
import { ThumbnailProvider } from "../context/ThumbnailContext";
import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import AuctionDisplayer from "../components/AuctionDisplayer";
import "./pageCss/homePage.css";

const HomePage = () => {
  const [filteredAuctions, setFilteredAuctions] = useState([]);

  const updateFilteredAuctions = (filterCombined) => {
    setFilteredAuctions(filterCombined);
  };

  useEffect(() => {
    try {
      const showFilter = document.getElementById("displayFilterButton");
      const hideFilter = document.getElementById("hideFilterButton");
      showFilter.onclick = function () {
        const filterMobile = document.getElementById("filterMobile");
        filterMobile.style.display = "initial";
        hideFilter.style.display = "initial";
        showFilter.style.display = "none";
      };
      hideFilter.onclick = function () {
        const filterMobile = document.getElementById("filterMobile");
        filterMobile.style.display = "none";
        showFilter.style.display = "initial";
        hideFilter.style.display = "none";
      };
    } catch (err) {
      console.log("error: " + err);
    }
  }, []);

  return (
    <>
      <ThumbnailProvider>
        <div className="heroHome">
          <Link to="/auctions" className="linkCreateAuction">
            <button className="createAuctionButton">
              <h3>Create Auction</h3>
            </button>
          </Link>
          <div className="desktopFilter">
            <Filter setFilteredAuctions={updateFilteredAuctions} />
          </div>
          <button id="displayFilterButton">Show Filter</button>
          <button id="hideFilterButton">Hide Filter</button>
        </div>
        <div className="mobileFilter" id="filterMobile">
          <Filter setFilteredAuctions={updateFilteredAuctions} />
        </div>
        <AuctionDisplayer filterCombined={filteredAuctions} />
      </ThumbnailProvider>
    </>
  );
};

export default HomePage;
