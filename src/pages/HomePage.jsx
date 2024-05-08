import Thumbnail from "../components/Thumbnail";
import HeroImage from "../components/HeroImage";
import Filter from "../components/Filter";
import AuctionDisplayer from "../components/AuctionDisplayer";

const HomePage = () => {
  return (
    <>
      <div className="heroHome">
        <button className="createAuctionButton">
          <h3>Create Auction</h3>
        </button>
        <Filter />
      </div>
      <AuctionDisplayer />
    </>
  );
};

export default HomePage;
