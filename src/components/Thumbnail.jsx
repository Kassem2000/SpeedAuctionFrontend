import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./componentCss/thumbnail.css";

const Thumbnail = ({ thumbnail, auctionId }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/auctionTypeCar/filterByAuction/${auctionId}`
        );
        setImageUrl(res.data[0].carPng);
      } catch (err) {
        console.log("Error fetching image: ", err);
      }
    };
    fetchImage();
  }, [auctionId]);

  return (
    <Link className="linkAuction" to={"bid/" + thumbnail.id}>
      <img
        className="thumbnailImg"
        src={imageUrl}
        alt="image of an auction"
      ></img>
      <div className="elementContainerThumb">
        <div className="thumbnailRating">&#9733;</div>
        <h3 className="thumbnailCost">{thumbnail.startingPrice}</h3>
      </div>
    </Link>
  );
};

export default Thumbnail;
