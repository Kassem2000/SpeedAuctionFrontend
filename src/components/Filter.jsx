import "./componentCss/filter.css";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, createContext, useState } from "react";
import axios from "axios";

const pTags = [];

for (let year = 1900; year <= 2030; year++) {
  pTags.push(`${year}`);
}

const FilterContext = createContext();

const yearList = pTags.join("\n");

const Filter = () => {
  const [carBrand, setCarBrand] = useState("noFilter");
  const [carColor, setCarColor] = useState("noFilter");
  const [carYear, setCarYear] = useState("noFilter");
  const [filteredAuctions, setFilteredAuctions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resAll = await axios.get(
      `${import.meta.env.VITE_API_URL}/auctionTypeCar/all`
    );

    let filterCombined = resAll.data;

    try {
      if (carBrand !== "noFilter") {
        const resBrand = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/auctionTypeCar/filterByBrand/${carBrand}`
        );
        const filteredBrand = resBrand.data.filter((auction) => {
          return filterCombined.some(
            (resultAuction) => resultAuction.id === auction.id
          );
        });
        filterCombined = filteredBrand;
        console.log("dadfas: ", filterCombined);
      }

      if (carColor !== "noFilter") {
        const resColor = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/auctionTypeCar/filterByColor/${carColor}`
        );
        const filteredColor = resColor.data.filter((auction) => {
          return filterCombined.some(
            (resultAuction) => resultAuction.id === auction.id
          );
        });
        filterCombined = filteredColor;
        console.log("bef: ", filterCombined);
      }

      if (carYear !== "noFilter") {
        const resYear = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/auctionTypeCar/filterByYearManufactured/${carYear}/${carYear}`
        );
        const filteredYear = resYear.data.filter((auction) => {
          return filterCombined.some(
            (resultAuction) => resultAuction.id === auction.id
          );
        });
        filterCombined = filteredYear;
        console.log("g: ", filterCombined);
      }

      console.log(filterCombined);
      setFilteredAuctions(filterCombined);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const handleBrandChange = (e) => {
    setCarBrand(e.target.value);
  };

  const handleColorChange = (e) => {
    setCarColor(e.target.value);
  };

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };

  return (
    <form className="filterWrapper" onSubmit={handleSubmit}>
      <div className="filterBy">
        <div className="filterLabel">
          <div className="textCont">
            <h3>Year</h3>
          </div>
          <select
            className="dropdown-content"
            id="year"
            name="year"
            value={carYear}
            onChange={handleYearChange}
          >
            <option value="noFilter">No filter</option>
            {yearList.split("\n").map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="filterLabel">
          <div className="textCont">
            <h3>Model</h3>
          </div>
          <div className="dropdown-content">
            <p>Input Model:</p>
            <input type="text" placeholder="model" />
          </div>
        </div>
        <div className="filterLabel">
          <div className="textCont">
            <h3>Brand</h3>
          </div>
          <select
            className="dropdown-content"
            id="carBrand"
            name="carBrand"
            value={carBrand}
            onChange={handleBrandChange}
          >
            <option value="noFilter">No filter</option>
            <option value="PORSCHE">Porsche</option>
            <option value="FERRARI">Ferrari</option>
            <option value="LAMBORGHINI">Lamborghini</option>
            <option value="AUDI">Audi</option>
            <option value="MCLAREN">Mclaren</option>
            <option value="BMW">Bmw</option>
            <option value="BUGATTI">Bugatti</option>
            <option value="CHEVROLET">Chevrolet</option>
            <option value="MERCEDES">Mercedes</option>
            <option value="ALFA ROMEO">Alfa Romeo</option>
            <option value="ASTON MARTIN">Aston Martin</option>
          </select>
        </div>
        <div className="filterLabel">
          <div className="textCont">
            <h3>Miles Driven</h3>
          </div>
          <div className="dropdown-content">
            <p>Input Miles:</p>
            <input type="text" placeholder="miles" />
          </div>
        </div>
        <div className="filterLabel">
          <div className="textCont">
            <h3>Color</h3>
          </div>

          <select
            className="dropdown-content"
            id="color"
            name="color"
            value={carColor}
            onChange={handleColorChange}
          >
            <option value="noFilter">No filter</option>
            <option value="OTHER">Other</option>
            <option value="BLACK">Black</option>
            <option value="WHITE">White</option>
            <option value="RED">Red</option>
            <option value="BLUE">Blue</option>
            <option value="GREEN">Green</option>
            <option value="YELLOW">Yellow</option>
            <option value="ORANGE">Orange</option>
            <option value="PURPLE">Purple</option>
            <option value="BROWN">Brown</option>
            <option value="PINK">Pink</option>
            <option value="GRAY">Gray</option>
            <option value="SILVER">Silver</option>
          </select>
        </div>

        <div className="filterLabel">
          <div className="textCont">
            <h3>Price</h3>
          </div>
          <div className="dropdown-content">
            <input type="text" placeholder="Enter minimum price" />
            <input type="text" placeholder="Enter maximum price" />
          </div>
        </div>
      </div>
      <button className="filterButton" type="submit">
        <h3>Filter Auctions</h3>
      </button>
    </form>
  );
};

export default Filter;
