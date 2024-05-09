import React, { useState } from "react";
import "./pageCss/createAuctionPage.css";

const CreateAuctionPage = () => {
  return (
    <div className="createModel">
      <div className="auctioninput">
        <input
          type="text"
          name="Create Your Auction"
          placeholder="Create Your Auction"
        />
      </div>
      <form>
        <div className="Fields">
          <label>
            <input type="text" name="Brand" placeholder="Brand" />
          </label>
          <label>
            <input type="text" name="Model" placeholder="Model" />
          </label>
          <label>
            <input type="text" name="Year" placeholder="Year" />
          </label>
          <label>
            <input type="text" name="Miles" placeholder="Miles" />
          </label>
          <label>
            <input type="text" name="Color" placeholder="Color" />
          </label>
        </div>
        <div className="Fields">
          <label>
            <input
              type="text"
              name="License plate"
              placeholder="License plate"
            />
          </label>
          <label>
            <input type="text" name="Condition" placeholder="Condition" />
          </label>
          <label>
            <input type="text" name="PNG" placeholder="PNG" />
          </label>
          <label>
            <input type="text" name="Description" placeholder="Description" />
          </label>
        </div>
      </form>
      <button type="Confirm" className="Confirmed">
        CONFIRM
      </button>
    </div>
  );
};

export default CreateAuctionPage;
