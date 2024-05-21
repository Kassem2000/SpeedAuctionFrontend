import { createContext, useState } from "react";
import axios from "axios";

// create context
const AuctionContext = createContext();

// create provider
const AuctionProvider = ({ children }) => {
  const [displayedAuction, setDisplayedAuction] = useState({});
  const [auctionTypeCar, setAuction] = useState({});

  const fetchAuctionById = async (auctionId) => {
    try {
      const resAuctions = await axios.get(
        `${import.meta.env.VITE_API_URL}/auctions/${auctionId}`
      );

      const AuctionCar = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/auctionTypeCar/filterByAuction/${auctionId}`
      );

      let TopBid = "";
      let TotalBids = "";

      try {
        TopBid = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/bids/getTopBidByAuctionId/${auctionId}`
        );
        TotalBids = await axios.get(
          `${import.meta.env.VITE_API_URL}/bids/filterByAuctionId/${auctionId}`
        );
      } catch (err) {
        console.error("error: " + err);
      }

      const auctionData = {
        ...resAuctions.data,
        topBid: TopBid.data !== undefined ? TopBid.data.amount : 0,
        bidCount: TopBid.data !== undefined ? TotalBids.data.length : 0,
        _id: auctionId,
      };

      setAuction(AuctionCar.data[0]);
      setDisplayedAuction(auctionData);
    } catch (err) {
      console.error("error: " + err);
    }
  };

  const addBid = async (auctionId, bidAmount) => {
    const user = window.localStorage.getItem("user");
    const userContent = JSON.parse(user);
    let userId = userContent.id;
    console.log("userId: ", userId);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/bids/${auctionId}/${userId}`,
        {
          auctionId,
          amount: bidAmount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("Bid placed:", res.data);

      if (res.data.success) {
        setDisplayedAuction((prevAuction) => ({
          ...prevAuction,
          topBid: bidAmount,
        }));
      }
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  return (
    <AuctionContext.Provider
      value={{
        auctionTypeCar,
        setAuction,
        displayedAuction,
        setDisplayedAuction,
        fetchAuctionById,
        addBid,
      }}
    >
      {children}
    </AuctionContext.Provider>
  );
};

export { AuctionContext, AuctionProvider };
