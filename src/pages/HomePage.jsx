import Thumbnail from "../components/Thumbnail";
import HeroImage from "../components/HeroImage";

const HomePage = () => {
  return (
    <>
      <div className="heroHome">
        <div className="createAuctionButton">
          <h3>Create Auction</h3>
        </div>
        <div className="filterWrapper">
          <div className="filterBy">
            <h3>Year</h3>
            <h3>Model</h3>
            <h3>Brand</h3>
            <h3>Miles Driven</h3>
            <h3>Color</h3>
            <h3>Price</h3>
          </div>
          <div className="filterButton">
            <h3>Filter Auctions</h3>
          </div>
        </div>
      </div>
      <div className="thumbnailWrapper">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    </>
  );
};

export default HomePage;
