import { BiColor } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./componentCss/thumbnail.css";

const Thumbnail = ({ thumbnail }) => {
  return (
    <Link className="linkAuction" to="/bid">
      <div className="thumbnailImg">
        <div className="thumbnailRating">&#9733;</div>
        <h3 className="thumbnailCost">{thumbnail.startingPrice}</h3>
      </div>
    </Link>
  );
};

export default Thumbnail;
