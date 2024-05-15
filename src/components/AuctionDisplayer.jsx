import { useContext } from "react";
import { ThumbnailContext } from "../context/ThumbnailContext";
import Thumbnail from "./Thumbnail";
import "./componentCss/auctionDisplayer.css";

const AuctionDisplayer = ({ filterCombined }) => {
  const { thumbnail } = useContext(ThumbnailContext);

  if (!thumbnail || thumbnail.length === 0) {
    return <p className="placeHolderNoAuctions">No Auctions Available!</p>;
  }

  let displayedThumbnails = thumbnail;

  if (filterCombined && filterCombined.length > 0) {
    displayedThumbnails = thumbnail.filter((auction) => {
      return filterCombined.some(
        (resultAuction) => resultAuction.auctionId === auction.id
      );
    });
  }

  return (
    <div className="thumbnailWrapper">
      {displayedThumbnails.map((thumbnail) => (
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
