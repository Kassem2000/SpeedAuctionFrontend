import React from "react";
import "./componentCss/bidInfo.css";
import { AuctionContext } from "../context/AuctionContext";
import { useContext } from "react";


const BidInfo = () => {
  return (
    <div className='bidInfo'>
        <h2 className='created'>Created:</h2>
        <label>
            <h2 className='box1'>Starting bid:</h2>
        </label>
        <label>
            <h2 className='box2'>Top bid:</h2>
        </label>
        <label>
            <h2 className='box3'>Bid amount:
            <input type="number" ></input>
            </h2>
        </label>
        <label>
            <h2 className='box4'>Auction ends:</h2>
        </label>
        <button className='grenClick'>Place bid</button>
    

    </div>
  )
}

export default BidInfo

