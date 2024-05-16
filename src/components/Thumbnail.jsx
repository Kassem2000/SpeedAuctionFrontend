import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./componentCss/thumbnail.css";

const Thumbnail = ({ thumbnail, auctionId }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [thumbnailCost, setThumbnailCost] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const resImg = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/auctionTypeCar/filterByAuction/${auctionId}`
        );
        setImageUrl(resImg.data[0].carPng);
      } catch (err) {
        console.log("Image fetching error: ", err);
      }
    };
    const fetchCost = async () => {
      try {
        const resBid = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/bids/getTopBidByAuctionId/${auctionId}`
        );
        setThumbnailCost(resBid.data.amount);
      } catch (err) {}
    };
    const setStandardPrice = async () => {
      if (thumbnailCost === "") {
        setThumbnailCost(thumbnail.startingPrice);
      }
    };
    fetchImage();
    fetchCost();
    setStandardPrice();
  }, []);

  // heh

  return (
    <Link className="linkAuction" to={"bid/" + thumbnail.id}>
      <img
        className="thumbnailImg"
        src={imageUrl}
        alt="image of an auction"
      ></img>
      <div className="elementContainerThumb">
        <div className="thumbnailRating">&#9733;</div>
        <h3 className="thumbnailCost">{thumbnailCost}</h3>
      </div>
    </Link>
  );
};

export default Thumbnail;
