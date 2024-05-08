import { useContext } from "react";
import { ThumbnailContext } from "../context/ThumbnailContext";
import Thumbnail from "./Thumbnail";
import "./componentCss/auctionDisplayer.css";

const AuctionDisplayer = () => {
  const { thumbnail, setThumbnail } = useContext(ThumbnailContext);

  if (!thumbnail || thumbnail.length === 0) {
    return <p className="placeHolderNoAuctions">No Auctions Available!</p>;
  }

  console.log(thumbnail.id);

  return (
    <div className="thumbnailWrapper">
      {thumbnail.map((thumbnail) => (
        <Thumbnail key={thumbnail.id} thumbnail={thumbnail} />
      ))}
    </div>
  );
};

export default AuctionDisplayer;
