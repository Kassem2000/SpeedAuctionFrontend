import React, { useState } from "react";
import "./pageCss/createAuctionPage.css";
import HeroImage from "../components/HeroImage";

const CreateAuctionPage = () => {
  return (
    <createAuctionProvider>
      <HeroImage>
        <div className="createModel">
          <div className="auctioninput"> Create your auction</div>
          <form>
            <div className="Fields">
              <label>
                <input type="text" name="startingPrice" placeholder="Price" />
              </label>
              <label>
                <input type="text" name="Brand" placeholder="Brand" />
              </label>
              <label>
                <input type="text" name="carModel" placeholder="Model" />
              </label>
              <label>
                <input type="text" name="yearManufactured" placeholder="Year" />
              </label>
              <label>
                <input type="text" name="milesDriven" placeholder="Miles" />
              </label>
              <label>
                <input type="text" name="Color" placeholder="Color" />
              </label>
            </div>
            <div className="Fields">
              <label>
                <input
                  type="text"
                  name="regNumber"
                  placeholder="License plate"
                />
              </label>

              <label>
                <input type="text" name="endOfAuction" placeholder="End Date" />
              </label>
              <label>
                <input type="text" name="Condition" placeholder="Condition" />
              </label>
              <label>
                <input type="text" name="carPng" placeholder="PNG" />
              </label>
              <label>
                <input
                  type="text"
                  name="Description"
                  placeholder="Description"
                />
              </label>
            </div>
          </form>
          <button type="Confirm" className="Confirmed">
            CONFIRM
          </button>
        </div>
      </HeroImage>
    </createAuctionProvider>
  );
};

export default CreateAuctionPage;
