import Thumbnail from "./Thumbnail";
import "./componentCss/auctionDisplayer.css";

const AuctionDisplayer = () => {
  return (
    <div className="thumbnailWrapper">
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </div>
  );
};

export default AuctionDisplayer;
