import React, { useContext, useState } from "react";
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
    startingPrice: "",
    endOfAuction: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/auctions/66437b14af78926bdebc7681",
        auctionvalues,

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({
        type: "createAuction",
        payload: data,
      });
      window.localStorage.setItem("auction", JSON.stringify(data));
      console.log("auction created");
      alert("created auction");
      return navigate("/createAuction");
    } catch (err) {
      console.log("Error " + err);
      alert("creation failed");
    }
  };
  const onChange = (e) => {
    setAuctionValues({ ...auctionvalues, [e.target.name]: e.target.value });
  };

  return (
    <CreateAuctionProvider>
      <HeroImage>
        <div className="auctioncontainer">
          <form onSubmit={handleSubmit}>
            <label className="pricelabel">
              <input
                type="text"
                name="startingPrice"
                placeholder="Price"
                onChange={onChange}
              />
            </label>
            <label className="endlabel">
              <input
                type="text"
                name="endOfAuction"
                placeholder="End Date"
                onChange={onChange}
              />
            </label>
          </form>
        </div>
        <button type="submit">Next</button>
      </HeroImage>
    </CreateAuctionProvider>
  );
};
export default Auction;
