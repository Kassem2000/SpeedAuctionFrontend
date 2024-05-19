import { createContext, useState } from "react";
import axios from "axios";

// create context
const AuctionContext = createContext();

// create provider
const AuctionProvider = ({ children }) => {
  const [displayedAuction, setDisplayedAuction] = useState([]);
  const [auctionTypeCar, setAuction] = useState([]);

  const fetchAuctionById = async (auctionId) => {
    try {
      const resAuctions = await axios.get(
        `${import.meta.env.VITE_API_URL}/auctions/${auctionId}`
      );

      const AuctionCar = await axios.get(
        `${import.meta.env.VITE_API_URL}/auctionTypeCar/filterByAuction/${auctionId}`
      );

      const TopBid = await axios.get(
        `${import.meta.env.VITE_API_URL}/bids/getTopBidByAuctionId/${auctionId}`
      );

      const auctionData = {
        ...resAuctions.data,
        topBid: TopBid.data.amount, 
      };

      setAuction(AuctionCar.data[0]);
      setDisplayedAuction(auctionData);
    } catch (err) {
      console.error("error: " + err);
    }
  };

  /*const addBid = async (newBid) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/Bid`, newBid);
    } catch (err) {
      console.log("Error: " + err);
    }
  };*/

  return (
    <AuctionContext.Provider
      value={{
        auctionTypeCar,
        setAuction,
        displayedAuction,
        setDisplayedAuction,
        fetchAuctionById,
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
};

export { AuctionContext, AuctionProvider };
