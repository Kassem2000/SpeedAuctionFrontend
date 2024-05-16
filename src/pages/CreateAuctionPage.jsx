import React, { useContext, useState } from "react";
import "./pageCss/createAuctionPage.css";
import HeroImage from "../components/HeroImage";
import {
  CreateAuctionContext,
  CreateAuctionProvider,
} from "../context/CreateAuctionContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateAuctionPage = () => {
  const { dispatch } = useContext(CreateAuctionContext);
  const navigate = useNavigate();

  const [auctionvalues, setAuctionValues] = useState({
    startingPrice: "",
    endOfAuction: "",
  });
  const [auctiontypevalues, setAuctionTypeValues] = useState({
    brand: "",
    carModel: "",
    yearManufactured: "",
    milesDriven: "",
    color: "",
    carPng: "",
    regNumber: "",
    condition: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/createAuction",
        {
          auctionvalues,
          auctiontypevalues,
        },
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
      navigate("/");
    } catch (err) {
      console.log("Error " + err);
      alert("creation failed");
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name in auctionvalues) {
      setAuctionValues({
        ...auctionvalues,
        [name]: value,
      });
    } else if (name in auctiontypevalues) {
      setAuctionTypeValues({
        ...auctiontypevalues,
        [name]: value,
      });
    }
  };

  return (
    <CreateAuctionProvider>
      <HeroImage>
        <div className="createModel">
          <div className="auctioninput">Create your auction</div>
          <form onSubmit={handleSubmit}>
            <div className="Fields">
              <label>
                <input
                  type="text"
                  name="startingPrice"
                  placeholder="Price"
                  onChange={onChange}
                />
              </label>
              <label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  onChange={onChange}
                />
              </label>
              <label>
                <input
                  type="text"
                  name="carModel"
                  placeholder="Model"
                  onChange={onChange}
                />
              </label>
              <label>
                <input
                  type="text"
                  name="yearManufactured"
                  placeholder="Year"
                  onChange={onChange}
                />
              </label>
              <label>
                <input
                  type="text"
                  name="milesDriven"
                  placeholder="Miles"
                  onChange={onChange}
                />
              </label>
              <label>
                <input
                  type="text"
                  name="color"
                  placeholder="Color"
                  onChange={onChange}
                />
              </label>
            </div>
            <div className="Fields">
              <label>
                <input
                  type="text"
                  name="regNumber"
                  placeholder="License plate"
                  onChange={onChange}
                />
              </label>
              <label>
                <input
                  type="text"
                  name="endOfAuction"
                  placeholder="End Date"
                  onChange={onChange}
                />
              </label>
              <label>
                <input
                  type="text"
                  name="condition"
                  placeholder="Condition"
                  onChange={onChange}
                />
              </label>
              <label>
                <input
                  type="text"
                  name="carPng"
                  placeholder="PNG"
                  onChange={onChange}
                />
              </label>
              <label>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={onChange}
                />
              </label>
            </div>
            <button type="submit" className="Confirmed">
              CONFIRM
            </button>
          </form>
        </div>
      </HeroImage>
    </CreateAuctionProvider>
  );
};

export default CreateAuctionPage;
