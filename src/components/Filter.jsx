import "./componentCss/filter.css";
import { IoIosArrowDown } from "react-icons/io";

const Filter = () => {
  return (
    <div className="filterWrapper">
      <div className="filterBy">
        <div className="filterLabel">
          <h3>Year</h3>
          <IoIosArrowDown />
        </div>
        <div className="filterLabel">
          <h3>Model</h3>
          <IoIosArrowDown />
        </div>
        <div className="filterLabel">
          <h3>Brand</h3>
          <IoIosArrowDown />
        </div>
        <div className="filterLabel">
          <h3>Miles Driven</h3>
          <IoIosArrowDown />
        </div>
        <div className="filterLabel">
          <h3>Color</h3>
          <IoIosArrowDown />
        </div>
        <div className="filterLabel">
          <h3>Price</h3>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="filterButton">
        <h3>Filter Auctions</h3>
      </div>
    </div>
  );
};

export default Filter;
