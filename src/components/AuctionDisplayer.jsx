import { useContext } from "react";
import { ThumbnailContext } from "../context/ThumbnailContext";
import Thumbnail from "./Thumbnail";
import Filter from "./Filter";
import "./componentCss/auctionDisplayer.css";

const AuctionDisplayer = () => {
  const { thumbnail } = useContext(ThumbnailContext);

  if (!thumbnail || thumbnail.length === 0) {
    return <p className="placeHolderNoAuctions">No Auctions Available!</p>;
  }

  return (
    <div className="thumbnailWrapper">
      {thumbnail.map((thumbnail) => (
        <Thumbnail
          key={thumbnail.id}
          thumbnail={thumbnail}
          auctionId={thumbnail.id}
        />
      ))}
    </div>
  );
};

export default AuctionDisplayer;
