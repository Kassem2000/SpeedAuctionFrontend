import { BiColor } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./componentCss/thumbnail.css";

const Thumbnail = ({ thumbnail }) => {
  console.log(thumbnail.id);
  return (
    <Link className="linkAuction" to={"bid/" + thumbnail.id}>
      <img
        className="thumbnailImg"
        src={thumbnail.carPng}
        alt="image of an auction"
      ></img>
      <div className="elementContainerThumb">
        <div className="thumbnailRating">&#9733;</div>
        <h3 className="thumbnailCost">{thumbnail.milesDriven}</h3>
      </div>
    </Link>
  );
};

export default Thumbnail;
