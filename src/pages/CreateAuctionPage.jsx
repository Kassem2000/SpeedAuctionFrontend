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

  auctiontypevalues.color = [`${auctiontypevalues.color}`];

  const carAuction = window.localStorage.getItem("carAuction");
  const carAuctionContent = JSON.parse(carAuction);
  let carAuctionId = carAuctionContent.id;
  console.log(carAuctionId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(auctiontypevalues);

    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/auctionTypeCar/${carAuctionId}`,
        auctiontypevalues,
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
      console.log("auction created");
      navigate("/");
    } catch (err) {
      console.log("Error " + err);
      alert("creation failed");
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name in auctiontypevalues) {
      setAuctionTypeValues({
        ...auctiontypevalues,
        [name]: value,
      });
    }
  };

  return (
    <CreateAuctionProvider>
      <HeroImage>
        <div className="auctioninputContainer">
          <div className="auctioninput">Create your auction</div>
        </div>
        <div className="createModel">
          <form className="formAuctionTypeCar" onSubmit={handleSubmit}>
            <div className="Fields">
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
                <textarea
                  className="inputDescription"
                  rows="10"
                  cols="30"
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={onChange}
                />
              </label>
            </div>
            <button type="submit" className="Confirmed next">
              CONFIRM
            </button>
          </form>
        </div>
      </HeroImage>
    </CreateAuctionProvider>
  );
};

export default CreateAuctionPage;
