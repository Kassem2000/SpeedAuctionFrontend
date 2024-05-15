import "./componentCss/filter.css";
import { useState } from "react";
import axios from "axios";

const yearOptions = [];

for (let year = 2030; year >= 1900; year--) {
  yearOptions.push(`${year}`);
}

const yearList = yearOptions.join("\n");

const Filter = ({ setFilteredAuctions }) => {
  const [carBrand, setCarBrand] = useState("noFilter");
  const [carColor, setCarColor] = useState("noFilter");
  const [carYear, setCarYear] = useState("noFilter");
  const [carMiles, setCarMiles] = useState("");
  const [minPrice, setCarMinPrice] = useState("");
  const [maxPrice, setCarMaxPrice] = useState("");

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
        console.log("carBrand filterCombined: ", filterCombined);
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
        console.log("carColor filterCombined: ", filterCombined);
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
        console.log("carYear filterCombined: ", filterCombined);
      }

      if (carMiles !== "") {
        const resMiles = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/auctionTypeCar/filterByMilesDriven/0/${carMiles}`
        );
        const filteredMiles = resMiles.data.filter((auction) => {
          return filterCombined.some(
            (resultAuction) => resultAuction.id === auction.id
          );
        });
        filterCombined = filteredMiles;
        console.log("carMiles filterCombined: ", filterCombined);
      }
      if (minPrice !== "" && maxPrice !== "") {
        //retrieving auctions based on only startingPrice and not taking highest bid into account, might try to fix later
        const resPrice = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/auctions/filterByStartingPriceBetween/${minPrice}/${maxPrice}`
        );

        const convertAuctionToAuctionTypeCar = resPrice.data.map(
          async (auctionWithMatchingPrice) => {
            const response = await axios.get(
              `${import.meta.env.VITE_API_URL}/auctionTypeCar/filterByAuction/${
                auctionWithMatchingPrice.id
              }`
            );
            return response.data;
          }
        );

        const auctionTypeCarResponse = await Promise.all(
          convertAuctionToAuctionTypeCar
        );

        const combinedData = auctionTypeCarResponse.flatMap(
          (objects) => objects
        );

        const filteredPrice = combinedData.filter((auction) => {
          return filterCombined.some(
            (resultAuction) => resultAuction.id === auction.id
          );
        });

        filterCombined = filteredPrice;
        console.log("carPrice filterCombined: ", filterCombined);
      }
      if (filterCombined.length !== 0) {
        setFilteredAuctions(filterCombined);
      } else {
        alert("no auctions matched filter!");
      }
      console.log("filterCombined: ", filterCombined);
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
  const handleMilesChange = (e) => {
    setCarMiles(e.target.value);
  };
  const handleMinPriceChange = (e) => {
    setCarMinPrice(e.target.value);
  };
  const handleMaxPriceChange = (e) => {
    setCarMaxPrice(e.target.value);
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
        <div className="filterLabel filterLabelInput">
          <div className="textCont">
            <h3>Max Miles Driven</h3>
          </div>
          <div className="dropdown-content dropDownInput dropDownMiles">
            <input
              type="text"
              placeholder="miles"
              value={carMiles}
              onChange={handleMilesChange}
            />
          </div>
        </div>

        <div className="filterLabel filterLabelInput">
          <div className="textCont">
            <h3>Price</h3>
          </div>
          <div className="dropdown-content dropDownInput">
            <input
              type="text"
              placeholder="minimum"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="text"
              placeholder="maximum"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
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
