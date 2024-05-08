import { BiColor } from "react-icons/bi";
import "./componentCss/thumbnail.css";

const Thumbnail = ({ thumbnail }) => {
  return (
    <div className="thumbnailImg">
      <div className="thumbnailRating">&#9733;</div>
      <h3 className="thumbnailCost">{thumbnail.startingPrice}</h3>
    </div>
  );
};

export default Thumbnail;
