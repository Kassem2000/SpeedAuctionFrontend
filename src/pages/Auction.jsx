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

  const user = window.localStorage.getItem("user");
  const userContent = JSON.parse(user);
  let userId = userContent.id;
  console.log("ddd ", userId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
              <input
                type="text"
                name="endOfAuction"
                placeholder="End Date"
                onChange={onChange}
              />
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
