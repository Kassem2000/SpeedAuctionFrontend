import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./pageCss/createAuctionPage.css";
import HeroImage from "../components/HeroImage";
import {
  CreateAuctionContext,
  CreateAuctionProvider,
} from "../context/CreateAuctionContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auction = () => {
  const { dispatch } = useContext(CreateAuctionContext);
  const navigate = useNavigate();

  const [auctionvalues, setAuctionValues] = useState({
    id: "",
    sellerId: "",
    startingPrice: "",
    isActive: false,
    created_at: "",
    endOfAuction: "",
  });
  const [timevalues, setTimeValues] = useState({
    year: "",
    month: "",
    day: "",
  });

  const user = window.localStorage.getItem("user");
  const userContent = JSON.parse(user);
  let userId = userContent.id;
  console.log("dd ", userId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (timevalues.month <= 9) {
        timevalues.month = "0" + timevalues.month;
      }
      if (timevalues.day <= 9) {
        timevalues.day = "0" + timevalues.day;
      }
      let timecombined =
        timevalues.year + "-" + timevalues.month + "-" + timevalues.day;
      auctionvalues.endOfAuction = timecombined;

      setAuctionValues({
        ...auctionvalues,
        endOfAuction: timecombined,
      });
      const { data } = await axios.post(
        `http://localhost:8080/api/auctions/${userId}`,
        auctionvalues,

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("ddada ", auctionvalues);
      dispatch({
        type: "createAuction",
        payload: data,
      });
      window.localStorage.setItem("carAuction", JSON.stringify(data));
      console.log("auction created");
      return navigate("/createAuction");
    } catch (err) {
      console.log("Error " + err);
      alert("creation failed");
    }
  };
  const onChange = (e) => {
    console.log("yoo", timevalues);
    setTimeValues({ ...timevalues, [e.target.name]: e.target.value });
    let timecombined =
      timevalues.year + "-" + timevalues.month + "-" + timevalues.day;
    console.log("hee", timevalues);
    auctionvalues.endOfAuction = timecombined;

    setAuctionValues({
      ...auctionvalues,
      [e.target.name]: e.target.value,
      endOfAuction: timecombined,
    });
    console.log("mittfel", timevalues);
    console.log(auctionvalues);
  };

  const yearOptions = [];

  for (let year = 2030; year >= 2024; year--) {
    yearOptions.push(`${year}`);
  }

  const yearList = yearOptions.join("\n");

  const monthOptions = [];

  for (let month = 1; month <= 12; month++) {
    monthOptions.push(`${month}`);
  }

  const monthList = monthOptions.join("\n");

  const dayOptions = [];

  for (let day = 1; day <= 31; day++) {
    dayOptions.push(`${day}`);
  }

  const dayList = dayOptions.join("\n");

  return (
    <CreateAuctionProvider>
      <HeroImage>
        <form onSubmit={handleSubmit}>
          <div className="auctioncontainer">
            <label className="sprice">
              <input
                type="text"
                name="startingPrice"
                placeholder="Price"
                onChange={onChange}
              />
            </label>
            <label className="sprice">
              <select
                type="text"
                name="year"
                placeholder="Year"
                onChange={onChange}
              >
                <option>Year</option>
                {yearList.split("\n").map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
            <label className="sprice">
              <select
                type="text"
                name="month"
                placeholder="Month"
                onChange={onChange}
              >
                <option>Month</option>
                {monthList.split("\n").map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </label>
            <label className="sprice">
              <select
                type="text"
                name="day"
                placeholder="Day"
                onChange={onChange}
              >
                <option>Day</option>
                {dayList.split("\n").map((day, index) => (
                  <option key={index} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </label>

            <button type="submit" className="next">
              Next
            </button>
          </div>
        </form>
      </HeroImage>
    </CreateAuctionProvider>
  );
};
export default Auction;
